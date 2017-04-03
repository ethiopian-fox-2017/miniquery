/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
let SweetSelector = {
  select: (selector) => {
    // let pattern = /[a-zA-Z0-9.#]/;
    let elementList = document.querySelectorAll(selector);
    return elementList;
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

let dom = {
  hide: (selector) => {
    let results = SweetSelector.select(selector)
    results.forEach((result) => {
      result.style.display = "none";
    })
  },
  show: (selector) => {
    let results = SweetSelector.select(selector)
    results.forEach((result) => {
      result.style.display = "";
    })
  },
  addClass: (selector, newClass) => {
    let results = SweetSelector.select(selector)
    results.forEach((result) => {
      result.classList.add(newClass)
    })
  },
  removeClass: (selector, theClass) => {
    let results = SweetSelector.select(selector)
    results.forEach((result) => {
      result.classList.remove(theClass)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

let EventDispatcher = {
  on: (selector, eventName, handler) => {
    let results = SweetSelector.select(selector)
    results.forEach((result) => {
      result.addEventListener(eventName, handler)
    })
  },
  trigger: (selector, eventName) => {
    let results = SweetSelector.select(selector);
    let events = document.createEvent('HTMLEvents');
    events.initEvent(eventName,true,false);
    results.forEach((result) => {
      result.dispatchEvent(events)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

let AjaxWrapper = {
  request: (params) => {
    let requestHttp = new XMLHttpRequest();
    requestHttp.open(params.type,params.url, true);

    requestHttp.onload = () => {
      if(requestHttp.status >= 200 && requestHttp.status < 400) {
        params.success(JSON.parse(requestHttp.responseText));
      } else {

      }
    }

    requestHttp.send();
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */




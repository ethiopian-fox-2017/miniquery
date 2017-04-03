/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 const SweetSelector = {
   select: (selector) => {
     return document.querySelectorAll(selector);
   }
 }

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 const DOM = {
  hide: (selector) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].style.display = "none"
    }
  },
  show: (selector) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].style.display = ""
    }
  },
  addClass: (selector, addSelector) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].classList += " " + addSelector
    }
  },
  removeClass: (selector, removeSelector) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].classList.remove(removeSelector)
    }
  },
 }

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 const EventDispatcher = {
  on: (selector, event, eventHandler) => {
    for (var i = 0; i < SweetSelector.select(selector).length; i++) {
      SweetSelector.select(selector)[i].addEventListener(event, eventHandler())
    }
  }
 }

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 const AjaxWrapper = {
  request: (object) => {
    let request = new XMLHttpRequest();
    request.open(object.type, object.url, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        return object.success("Yey");
      } else {
        return object.fail();
      }
    };
    request.send();
  }
 }

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

class Miniquery {
  constructor(el) {
    this.miniquery = document.querySelectorAll(el);
  }

  hide(){
    for (var i = 0; i < this.miniquery.length; i++) {
      this.miniquery[i].style.display = "none"
    }
  }
  show(){
    for (var i = 0; i < this.miniquery.length; i++) {
      this.miniquery[i].style.display = ""
    }
  }
}

let miniquery = (el) => {
  return new Miniquery(el)
}
let $ = (el) => {
  return new Miniquery(el)
}

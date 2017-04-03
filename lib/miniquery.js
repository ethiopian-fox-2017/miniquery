/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
 select : (element) => {
   return document.querySelectorAll(element);
 }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM =  {
  hide: (element) => {
    let elements = document.querySelectorAll(element);
    for(let i = 0; i < elements.length; i++){
      elements[i].style.display = 'none';
    }
  },

  show: (element) => {
    let elements = document.querySelectorAll(element);
    for(let i = 0; i < elements.length; i++){
      elements[i].style.display = '';
    }
  },

  removeClass: (element, classToBeRemoved) => {
    let elements = document.querySelectorAll(element);
    for(let i = 0; i < elements.length; i++){
      elements[i].classList.remove(classToBeRemoved)
    }
  },

  addClass: (element, newClass) => {
    let elements = document.querySelectorAll(element);
    for(let i = 0; i < elements.length; i++){
      elements[i].className += ' ' + newClass
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: (element, eventName, eventHandler) => {
    let elements = document.querySelectorAll(element);
    for(let i = 0; i < elements.length; i++){
      elements[i].addEventListener(eventName, eventHandler)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

const AjaxWrapper = {
 request: (obj) => {
   var request = new XMLHttpRequest();
   request.open(obj.type, obj.url, true);

   request.onload = () => {
     if (request.status >= 200 && request.status < 400) {
       obj.success(JSON.parse(request.responseText))
     } else {
       obj.fail()
     }
   }

   request.onerror = () => {
     obj.fail()
   }

   request.send()
 }
}


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

class Miniquery {
  constructor(element) {
    this.el = document.querySelectorAll(element)
  }

  hide() {
    for(let i = 0; i < this.el.length; i++){
      this.el[i].style.display = 'none';
    }
  }

  show() {
    for(let i = 0; i < this.el.length; i++){
      this.el[i].style.display = '';
    }
  }
}

function miniquery(element) {
  return new Miniquery(element)
}

/*
 * ----------------------------------------------------------------------------
 * Alias $
 * ----------------------------------------------------------------------------
 */

let $ = miniquery;

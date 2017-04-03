/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
class SweetSelector {
  static select(selector) {
    let query = document.querySelectorAll(selector) // return NodeList
    let nodes = [].map.call(query, node => node) // NOTE: change to pure Array
    return nodes.length == 1 ? nodes[0] : nodes
    // or
    // if (/^#/.test(selector)) {
    //   return document.getElementById(selector.replace(/^#/, ''))
    // } else if (/^\./.test(selector)) {
    //   return document.getElementsByClassName(selector.replace(/^\./, ''))
    // } else {
    //   return document.getElementsByTagName(selector)
    // }
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
class DOM {
  static hide(selector) {
    let els = SweetSelector.select(selector)
    if (Array.isArray(els)) {
      els.forEach(el => el.style.display = 'none')
    } else {
      els.style.display = 'none'
    }
  }

  static show(selector) {
    let els = SweetSelector.select(selector)
    if (Array.isArray(els)) {
      els.forEach(el => el.style.display = '')
    } else {
      els.style.display = ''
    }
  }

  static removeClass(selector, className) {
    let els = SweetSelector.select(selector)
    if (Array.isArray(els)) {
      els.forEach(el => el.classList.remove(className))
    } else {
      els.classList.remove(className);
    }
  }

  static addClass(selector, className) {
    let els = SweetSelector.select(selector)
    if (Array.isArray(els)) {
      els.forEach(el => el.classList.add(className))
    } else {
      els.classList.add(className);
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
class EventDispatcher {
  static on(selector, eventName, eventHandler) {
    let els = SweetSelector.select(selector)
    if (Array.isArray(els)) {
      els.forEach(el => el.addEventListener(eventName, eventHandler))
    } else {
      els.addEventListener(eventName, eventHandler);
    }
  }
  static trigger(selector, eventName) {
    let els = SweetSelector.select(selector)
    if (Array.isArray(els)) {
      els.forEach(el => {
        let event = document.createEvent('HTMLEvents')
        event.initEvent(eventName, true, false)
        el.dispatchEvent(event)
      })
    } else {
      let event = document.createEvent('HTMLEvents')
      event.initEvent(eventName, true, false)
      el.dispatchEvent(event)
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
class AjaxWrapper {
  static request(options) {
    let req = new XMLHttpRequest()
    req.open(options.type, options.url, true)
    req.onload = function() {
      if (req.status >= 200 && req.status < 400) {
        // let data = JSON.parse(req.responseText)
        let data = req.responseText
        options.success(data)
      } else {
        options.fail()
      }
    }
    req.onerror = function() {
      options.fail()
    }
    req.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
class Miniquery {
  constructor(selector) {
    this.selector = selector
  }
  hide() {
    DOM.hide(this.selector)
  }
  show() {
    DOM.show(this.selector)
  }
}

const miniquery = function(selector) {
  miniquery.ajax = function(options) {
    AjaxWrapper.request(options)
  }
  return new Miniquery(selector)
}
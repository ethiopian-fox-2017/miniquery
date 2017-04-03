/*!
 * miniquery
 */
class SweetSelector {
  static select(element){
    return document.querySelectorAll(element)
  }
}

class DOM {
  static hide(element){
    let elements = SweetSelector.select(element)
    for(var i = 0; i < elements.length; i++){
      elements[i].style.display = 'none'
    }
    return 'hides the div'
  }
  static show(element){
    let elements = SweetSelector.select(element)
    for(var i = 0 ; i < elements.length ; i++){
      elements[i].style.display = 'block'
    }
    return 'show the div'
  }

  static addClass(element, nameclass){
    let elements = SweetSelector.select(element)
    for(var i = 0 ; i < elements.length ; i++){
      elements[i].classList.add(nameclass)
    }
    return 'add class'
  }

  static removeClass(element, nameclass){
    let elements = SweetSelector.select(element)
    for(var i = 0; i < elements.length ; i ++) {
      elements[i].classList.remove(nameclass)
    }

    return 'remove class'
  }
}

class EventDispatcher {
  static on(classname, events, callback){
    let elements = SweetSelector.select(classname)
    for(var i = 0; i < elements.length ; i ++){
      elements[i].addEventListener('click', callback)
    }
  }

  static trigger(selector, eventHandler){
    let elements = SweetSelector.select(selector)
    let events = document.createEvent('HTMLEvents')
    event.initEvent(eventHandler, true, false);
    for(var i = 0; i < elements.length ; i++){
      elements[i].dispatchEvent(events)
    }
  }
}

class AjaxWrapper {
  static request(objectEvent){
    var request = new XMLHttpRequest();
    request.open(objectEvent.type, objectEvent.url, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        objectEvent.success(request.responseText || 'success')
      } else {
        // We reached our target server, but it returned an error
        objectEvent.fail()
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      objectEvent.fail()
    };

    request.send();
    return 'running ajax'
    }
}



var miniquery = function (element){
  miniquery.ajax = function(objectEvent){
    AjaxWrapper.request(objectEvent)
  }
  return {
    hide : function(){
      DOM.hide(element)
    },
    show : function() {
      DOM.show(element)
    },
    addClass : function(classAdded){
      DOM.addClass(element, classAdded)
    },
    removeClass : function(classRemove){
      DOM.removeClass(element, classRemove)
    }
  }
}

// miniquery.prototype.hide = function(){
//   console.log('taddaaa');
// }
/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

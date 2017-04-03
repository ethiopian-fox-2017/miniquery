/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

const SweetSelector = {

  select : (element)=> {
    return document.querySelectorAll(element)
  }

}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

const DOM = {

  hide : (element)=> {
    console.log('hide', document.querySelectorAll(element));
    let selected = document.querySelectorAll(element)
    if(selected.length > 1) {
      selected.forEach((el)=> {
        el.style.display = 'none'
      })
    } else {
      selected.style.display = 'none'
    }
  },
  show : (element)=> {
    console.log('show', document.querySelectorAll(element));
    let selected = document.querySelectorAll(element)
    if(selected.length > 1) {
      selected.forEach((el)=> {
        el.style.display = ''
      })
    } else {
      selected.style.display = ''
    }
  },
  removeClass : (element, value)=> {
    console.log('removeClass', document.querySelectorAll(element))
    let selected = document.querySelectorAll(element)
    if(selected.length >= 1) {
      selected.forEach((el)=> {
        el.classList.remove(value)
      })
    }
  },
  addClass : (element, value)=> {
    console.log('addClass', document.querySelectorAll(element))
    let selected = document.querySelectorAll(element)
    if(selected.length >= 1) {
      selected.forEach((el)=> {
        el.className += ' '+value
      })
    }
  }

}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {

  on : (element, method, cb)=> {
    document.querySelector(element).addEventListener(method, cb())
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {

  request : (obj)=> {
    req = new XMLHttpRequest()
    req.open(obj.type, obj.url)

    req.onload = ()=> {
      if(req.status >= 200 && req.status < 400) {
        let data = req.responseText
      } else {
        console.log('no data')
      }
    }

    req.onerror = ()=> {
      console.log('connection failed')
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
  constructor(el) {
    this.el = SweetSelector.select(el)
  }

  hide() {
    console.log(this.el ,'hide worked!')
    this.el.forEach((el)=> {
      el.style.display = 'none'
    })
  }

  show() {
    console.log(this.el ,'show worked!')
    this.el.forEach((el)=> {
      el.style.display = ''
    })
  }
}

function miniquery(el) {
  return new Miniquery(el)
}

// Miniquery.prototype.hide = ()=> {
//   console.log(this.el ,'hide worked!')
//   this.el.forEach((el)=> {
//     el.style.display = 'none'
//   })
// }

// Miniquery.prototype.show = ()=> {
//   console.log(this.el, 'show worked!')
//   DOM.show(this.el)
// }

const $ = miniquery


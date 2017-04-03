/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
// function SweetSelector () {
//   let link
//   this.select = function (selectors) {
//       link = document.querySelectorAll(selectors)
//       return this
//   }
//
//   this.hide = function () {
//     this.link.ngehide()
//   }
//
//   this.getLink = function () {
//     return {
//
//     }
//   }
//
// }
//
// var sweetSelector = new SweetSelector()
// sweetSelector.select('div')
//   .hide()


const SweetSelector = {

  select : function(selectors) {
    var link = document.querySelectorAll(selectors);
    return link
  }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

const DOM = {
  hide : function(selector) {
    var hiden = SweetSelector.select(selector)

    hiden.forEach(function(select) {
        select.style.display = "none"
      })
  },
  show : function(selector) {
    var show = SweetSelector.select(selector)

    show.forEach(function(select) {
      select.style.display = "block"
    })
  },
  addClass : function(select, param) {
    var add = SweetSelector.select(select)

    add.forEach(function(select) {
      select.classList.add(param)
    })

  },
  removeClass : function(selector, param) {
    var remove = SweetSelector.select(selector)

    remove.forEach(function(select) {
      select.classList.romove(param)
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher =  {
  on : function(selector) {
    var click =  SweetSelector.select(selector)

    click.forEach(function() {
      console.log("Awesome");
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

const AjaxWrapper = {
  request : function(obj) {
    var request = new XMLHttpRequest()
    request.open(obj.type, obj.url, true)

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var resp = request.responseText
        obj.success(resp)
      }
    }
    request.onerror = function() {
      console.log("Eroor Daniel.., url nya ngga ada gitu loh. :( ");
    }
    request.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 // const miniquery = function(params) {
 //   this.
 // }

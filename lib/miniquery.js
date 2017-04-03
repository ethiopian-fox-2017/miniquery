/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 class SweetSelector {
   static select(val) {
     let element = document.querySelectorAll(val)

     return element
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

 class DOM {
   static hide(val) {
     let arr = SweetSelector.select(val)
     for (var i = 0; i < arr.length; i++) {
       arr[i].style.display = "none"
     }
   }

   static show(val) {
     let arr = SweetSelector.select(val)
     for (var i = 0; i < arr.length; i++) {
       arr[i].style.display = ""
     }
   }

   static addClass(val, aditionalClass){
     let arr = SweetSelector.select(val)

     for (var i = 0; i < arr.length; i++) {
       arr[i].className += ' ' + aditionalClass
     }
   }

   static removeClass(val, removeClass){
     let arr = SweetSelector.select(val)

     for (var i = 0; i < arr.length; i++) {
       arr[i].classList.remove(removeClass)
     }
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

 class EventDispatcher {
   static on(className, val, cb) {
     let arr = SweetSelector.select(className)

     for (var i = 0; i < arr.length; i++) {
       arr[i].addEventListener(val, cb)
     }
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

 class AjaxWrapper {
   static request(val) {
     var requestHttp = new XMLHttpRequest()

     requestHttp.open(val.type, val.url, true)

     requestHttp.onload = function () {
       if (requestHttp.status >= 200 && requestHttp.status < 400) {
         var data = JSON.parse(requestHttp.responseText)
         val.success(data)
       }else{
         val.fail()
       }
     }

     requestHttp.onerror = function () {
       val.fail()
     }

     requestHttp.send()
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */



 let miniquery = function (val) {

   function hide () {
     DOM.hide(val)
   }

   function show() {
     DOM.show(val)
   }

   return {
     this : SweetSelector.select(val),
     hide : hide,
     show : show
   }
 }


 const $ = miniquery

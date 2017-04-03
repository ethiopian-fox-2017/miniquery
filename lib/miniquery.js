/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
 class SweetSelector  {
    static select (val){
      return document.querySelectorAll(val)
    }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
 class DOM{
   static hide(val){
     let hider = SweetSelector.select(val)
     hider.forEach(function ( data ) {
       data.style.display = 'none';
     })
   }
   static show(val){
     let showing = SweetSelector.select(val)
     showing.forEach(function ( data ) {
       data.style.display = '';
     })
   }
  static addClass( val, shaded ){
    let add = SweetSelector.select(val)
    add.forEach(function (data) {
      data.classList.add(shaded);
    })
  }
  static removeClass(val, shaded){
    let remove = SweetSelector.select (val)
    remove.forEach (function (data){
      if (data.classList)
      data.classList.remove(className);
      else
      data.className = data.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    })
  }
 }


/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
 class EventDispatcher{
   static on (val, eventName, eventHendler){
     let dispatcher = SweetSelector.select(val)
     dispatcher.forEach(function(data){
       data.addEventListener(eventName, eventHendler())
     })
   }
 }


/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 class AjaxWrapper{
   static request(obj){

     var rqst = new XMLHttpRequest();

     rqst.open(obj.type, obj.url, true);

     rqst.onload = function() {
       if (rqst.status >= 200 && rqst.status < 400) {
         // Success!

         var data = JSON.parse(rqst.responseText);
        //  console.log(request.responseText);
         obj.success(data)
       } else {
         // We reached our target server, but it returned an error
         obj.fail()
       }
     };

     rqst.onerror = function() {
       obj.fail()
       // There was a connection error of some sort
     };
     rqst.send()
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

const miniquery = (Selector) => {
  const hide = ()=> {
    DOM.hide(Selector)
  }
  const show = () =>{
    DOM.show(Selector)
  }
  return ({
    this : SweetSelector.select(Selector),
    hide : hide
  })
}
const $ = miniquery

/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select: function(el) {
    return document.querySelectorAll(el);
  },
  selectOne:function(param){
    return document.querySelector(param);
  }
}


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM={
  hide:function(param){
    let arrdom=SweetSelector.select(param);
    for (var i = 0; i < arrdom.length; i++) {
      arrdom[i].style.display = 'none'
    }
  },
  show:function(param){
    let arrdom=SweetSelector.select(param);
    for (var i = 0; i < arrdom.length; i++) {
      arrdom[i].style.display = ''
    }
  },
  addClass:function(parent,child){
   SweetSelector.select(parent).
    forEach(function(klass){
      klass.className+=' '+child
    })
  },
  removeClass:function(parent,child){
    console.log(parent+' .'+child);
    SweetSelector.select(parent).forEach(function(klass){
      klass.classList.remove(child);
    })
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
let EventDispatcher={
 on:function(el,ev,cb){
   SweetSelector.select(el).forEach(function(elem){
     elem.addEventListener(ev,cb())
   })
 }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
 let AjaxWrapper = {
   request:function(param){
     let request=new XMLHttpRequest();
     request.open(param.type,param.url,true)
     request.onload=function(){
       if (request.status>=200 && request.status<400) {
          param.success()
       } else {
         param.fail()
       }
     }
    request.onerror=function(err){
      console.log(err);
    }
     request.send();
   }
 }


/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */
let miniquery = function(param){
  function hide(){
    DOM.hide(param);
  };
  function show(){
    DOM.show(param);
  };
  function on(ev,cb){
    EventDispatcher.on(param,ev,cb)
  };

  return{
    this:SweetSelector.select(param),
    hide:hide,
    show:show,
    on:on
  }

}

let $= miniquery;

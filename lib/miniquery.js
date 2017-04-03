/*!
 * miniquery
 */

'use strict'

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */

 const SweetSelector =  {
   select : function(el){
     if(el && el[0] == '#'){
       return document.getElementById(el.substr(1))
     }
     else if (el && el[0] == '.'){
       return document.getElementsByClassName(el.substr(1))
     }
     else {
       return document.getElementsByTagName(el);
     }
    //  return document.querySelectorAll(el);
   }
 }


/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */

const DOM = {
  hide : function (el){
    let docArray = document.querySelectorAll(el);
    for(let i=0;i<docArray.length;i++){
      docArray[i].style.visibility = "hidden";
    }
  },
  show : function(el){
    let docArray = document.querySelectorAll(el);
    for(let i=0;i<docArray.length;i++){
      docArray[i].style.visibility = "visible";
    }
  },
  removeClass : function(el, className){
    let docArray = document.querySelectorAll(el);
    for(let i=0;i<docArray.length;i++){
      docArray[i].classList.remove(className);
    }
  },
  addClass : function(el, className){
    let docArray = document.querySelectorAll(el);
    for(let i=0;i<docArray.length;i++){
      docArray[i].classList.add(className);
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */

const EventDispatcher = {
  on : (el, eventName, cb) => {
    let docArray = document.querySelectorAll(el);
    for(let i=0;i<docArray.length;i++){
      docArray[i].addEventListener(eventName, cb);
    }
  },
  trigger : (el, eventName) => {
    let docArray = document.querySelectorAll(el);
    for(let i=0;i<docArray.length;i++){
      docArray[i].addEventListener(eventName, function() {
        console.log("Awesome")
      });
    }
  }
}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */

const AjaxWrapper = {
  request : function(req){
    let oReq = new XMLHttpRequest();
    oReq.open(req.type, req.url, true);
  oReq.onload = function() {
    if (oReq.status >= 200 && oReq.status < 400) {
      // Success!
      var data = JSON.parse(oReq.responseText);
      req.success(data);
    } else {
      // We reached our target server, but it returned an error
      req.fail();
    }
  };

  oReq.onerror = function() {
    // There was a connection error of some sort
    req.fail();
  };

  oReq.send();

  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 function miniquery (el) {
   let docArray = document.querySelectorAll(el);
   docArray.hide = function(){
     for(let i=0;i<docArray.length;i++){
       docArray[i].style.visibility = "hidden";
     }
   };
   docArray.show = () => {
     for(let i=0;i<docArray.length;i++){
       docArray[i].style.visibility = "visible";
     }
   };
   docArray.addClass = function(className){
     for(let i=0;i<docArray.length;i++){
       docArray[i].classList.add(className);
     }
   };
   docArray.removeClass = (className)=>{
     for(let i=0;i<docArray.length;i++){
       docArray[i].classList.remove(className);
     }
   };
   docArray.on = function(events, cb){
     for(let i=0;i<docArray.length;i++){
       docArray[i].addEventListener(eventName, cb);
     }
   };
   docArray.trigger = function(events, cb){
     for(let i=0;i<docArray.length;i++){
       docArray[i].addEventListener(eventName, ()=>{
         console.log("awesome");
       });
     }
   }
   return docArray;
 }

 let miniqueryx = {
   ajax : function(req) {
     let oReq = new XMLHttpRequest();
     oReq.open(req.type, req.url, true);
     oReq.onload = function() {
       if (oReq.status >= 200 && oReq.status < 400) {
         // Success!
         var data = JSON.parse(oReq.responseText);
         req.success(data);
       } else {
         // We reached our target server, but it returned an error
         req.fail();
       }
     };

     oReq.onerror = function() {
       // There was a connection error of some sort
       req.fail();
     };

     oReq.send();

     }
 }

 let $ = miniquery;

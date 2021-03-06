var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var overlay =document.querySelector(".modal-overlay");
var buttonmap=document.querySelector("#button-map");
var map = document.querySelector(".modal-content-map");
var closemap = map.querySelector(".modal-content-close");

link.addEventListener("click", function(event){
    event.preventDefault();
   popup.classList.add("modal-content-show"); 
    overlay.classList.add("modal-overlay-show");
    if(storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});


close.addEventListener("click", function(event){
    event.preventDefault();
    overlay.classList.remove("modal-overlay-show");
   popup.classList.remove("modal-content-show"); 
    popup.classList.remove("modal-error");
});

closemap.addEventListener("click", function(event){
    event.preventDefault();
    overlay.classList.remove("modal-overlay-show");
   map.classList.remove("modal-content-map-show");
});
form.addEventListener("submit", function(event) {
  
    if(!login.value || !password.value){
          event.preventDefault();
          popup.classList.add("modal-error");
        
    } else {
        localStorage.setItem("login", login.value);
    }
   
});

window.addEventListener("keydown", function(event) {
    if(event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")){
          popup.classList.remove("modal-content-show"); 
          popup.classList.remove("modal-error");
             overlay.classList.remove("modal-overlay-show");
        }
        
        if(map.classList.contains("modal-content-map-show")){
             overlay.classList.remove("modal-overlay-show");
            map.classList.remove("modal-content-map-show");
        }
        
    }
});

buttonmap.addEventListener("click", function(event) {
    map.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
});
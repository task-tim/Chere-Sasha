/*let box1 = document.querySelector('.box--1');
let box2 = document.querySelector('.box--2');
let box3 = document.querySelector('.box--3');
let phoneCall = document.querySelector('.phoneCall');
let phone = document.querySelector('.phone');
let raccrocher = document.querySelector('.icone_raccrocher');
let repondre = document.querySelector('.icone_repondre');
let repondu = document.querySelector('.repondu');
let raccroche = document.querySelector('.raccroche');
const ignoreAppel = function(){
  raccroche.style.display="block";  
  phoneCall.style.display="none";
  document.body.style.backgroundColor= "black";
  }
const timer = setTimeout(ignoreAppel, 20000);
setTimeout(function() {
  box3.style.display="block";
}, 2000);
setTimeout(function() {
  box2.style.display="block";
}, 5000);
setTimeout(function() {
  box1.style.display="block";  
}, 8000);
setTimeout(function() {
  phoneCall.style.display="block";  
  phone.style.display="none";
  document.body.style.backgroundColor= "purple";
}, 10000);



raccrocher.addEventListener("click", function(){
  raccroche.style.display="block";
  phoneCall.style.display="none";
  document.body.style.backgroundColor= "black";
  clearTimeout(timer);
})
repondre.addEventListener("click", function(){
  repondu.style.display="block";
  phoneCall.style.display="none";
  document.body.style.backgroundColor= "black";
  clearTimeout(timer);
})*/
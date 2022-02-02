const moisArr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const jourArr = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let box1 = document.querySelector('.box--1');
let box2 = document.querySelector('.box--2');
let box3 = document.querySelector('.box--3');
let phoneCall = document.querySelector('.phoneCall');
let phone = document.querySelector('.phone');
let btnraccrocher = document.querySelector('.icone_raccrocher');
let btnrepondre = document.querySelector('.icone_repondre');
let repondu = document.querySelector('.phoneAnswer');
let raccroche = document.querySelector('.phoneDecline');
let temps = document.querySelector('#temps');
let temps2 = document.querySelector('#heure');
let temps3 = document.querySelector('#time');
let tempsAppel = document.querySelector('#tempsAppel');
let journee = document.querySelector('#journee');

function horloge(){
let date = new Date();
let mois = moisArr[date.getMonth()];
let jour = date.getDate();
let semaine = jourArr[date.getDay()];
let heure = date.getHours();
let minute = date.getMinutes();

if (minute < 10){
  temps.innerText = heure + ":0" + minute; 
  temps2.innerText = heure + ":0" + minute; 
  temps3.innerText = heure + ":0" + minute; 
}else{
  temps.innerText = heure + ":" + minute; 
  temps2.innerText = heure + ":" + minute;
  temps3.innerText = heure + ":" + minute;  
}
journee.innerText = semaine + " " + jour + " " + mois;
}
setInterval(horloge, 1000);

let secondeAppel = 0;
let minuteAppel = 0;

  



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

btnraccrocher.addEventListener("click", function(){
  raccroche.style.display="block";
  phoneCall.style.display="none";
  document.body.style.backgroundColor= "black";
  clearTimeout(timer);
})
btnrepondre.addEventListener("click", function(){
  appelTemps = setInterval(() => {
    secondeAppel++;
    if(secondeAppel == 60){
      secondeAppel = 0;
      minuteAppel = minuteAppel +1;
    }
    if(secondeAppel < 10){
      tempsAppel.innerText = "0" + minuteAppel + ":0" + secondeAppel;
    }else{   
      tempsAppel.innerText = "0" + minuteAppel + ":" + secondeAppel;
    }
    }, 1000);
  repondu.style.display="block";
  phoneCall.style.display="none";
  document.body.style.backgroundColor= "black";
  clearTimeout(timer);
})
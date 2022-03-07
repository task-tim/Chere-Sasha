const moisArr = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
const jourArr = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
let box1 = document.querySelector('.box--1');
let box2 = document.querySelector('.box--2');
let box3 = document.querySelector('.box--3');
let box4 = document.querySelector('.box--4');
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
let btnMax = document.querySelector('.max');
let phoneSleep = document.querySelector('.phoneSleep');
let secondeAppel = 0;
let minuteAppel = 0;
let appelTemps;
let timer;
const notif = new Audio('img/notif.wav');
const sonnerie = new Audio('img/sonnerieAdo.wav');

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
	
// ÉTABLIR UNE CONNEXION WEBSOCKET
let ws = new WebSocket("ws://192.168.1.176:7474");

// AFFICHER UN MESSAGE LORS DE LA CONNEXION
ws.onopen = function (event) {
	console.log("Connexion is open!");
};

// FERMER LA CONNEXION
window.onbeforeunload = function(){
  ws.close();
};

// RÉCEPTION DES MESSAGES
ws.onmessage = function (event) {
	// DIVER LE MESSAGE ASCII REÇU DANS LE TABLEAU messageArray
	// SELON LES ESPACES (' ') ENTRE LES MOTS
	let messageArray = event.data.split(' ');
	
	// messageArray[0] -> LE PREMIER MOT ASCII
	// messageArray[1] -> LE DEUXIÈME MOT ASCII

	 if ( messageArray[0] == "/bouton" ) { // SI LE PREMIER MOT EST ÉGAL À "/bouton" 
	     // parseInt(messageArray[1]); -> TRANSFORMER LE DEUXIÈME MOT ASCII EN ENTIER
		 phoneSleep.style.display = "none";
		 phone.style.display="block";
		 //si on ignore l'appel
		 const ignoreAppel = function(){
		   raccroche.style.display="block";  
		   phoneCall.style.display="none";
		   sonnerie.pause();
		   document.body.style.backgroundColor= "black";
		   ws.send("/raccroche 1");
		   setTimeout(function(){
			window.location.reload(true);
		   }, 2000)
		   }
		 timer = setTimeout(ignoreAppel, 46500);
		 
		 //notification, appel
		 setTimeout(function() {
			box4.style.display="block";
			notif.play();
		  }, 3000);

		 setTimeout(function() {
		   box3.style.display="block";
		   notif.play();
		 }, 5000);
		 
		 setTimeout(function() {
		   box2.style.display="block";
		   notif.play();
		 }, 8000);
		 
		 setTimeout(function() {
		   box1.style.display="block"; 
		   notif.play(); 
		 }, 12000);
		 
		 setTimeout(function() {
		   phoneCall.style.display="block";  
		   phone.style.display="none";
		   box2.style.display="none";
		   box3.style.display="none";
		   box1.style.display="none";
		   document.body.style.backgroundColor= "purple";
		   sonnerie.play();
		 }, 16000);
		 
		 //click du bouton raccrocher
		 btnraccrocher.addEventListener("click", function(){
		   raccroche.style.display="block";
		   phoneCall.style.display="none";
		   document.body.style.backgroundColor= "black";
		   clearTimeout(timer);
		   ws.send("/raccroche 1");
		   setTimeout(function(){
			window.location.reload(true);
		   }, 2000)
		 })
		 
		 
};
//click du bouton répondre
		 btnrepondre.addEventListener("click", function(){
			repondu.style.display="block";
			phoneCall.style.display="none";
			document.body.style.backgroundColor= "black";
			ws.send("/repond 1");
			appelTemps = setInterval(() => {
				console.log(secondeAppel);
				secondeAppel++;
				if(secondeAppel == 60){
				  secondeAppel = 0;
				  minuteAppel++;
				}
				if(secondeAppel < 10){
				  tempsAppel.innerText = "0" + minuteAppel + ":0" + secondeAppel;
				}else{   
				  tempsAppel.innerText = "0" + minuteAppel + ":" + secondeAppel;
				}
				}, 1000);
				clearTimeout(timer);
		   setTimeout(function(){
			window.location.reload(true);
		   }, 4000)
		 })
		}





    // collect all the divs
var divs = document.querySelectorAll('.commentaire');
// get window width and height
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    console.log('hi');
    // get random numbers for each element
    randomTop = getRandomNumber(-30, 250);
    randomLeft = getRandomNumber(0, 1350);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
     
}
/*
  const animgsap = function(){
    gsap.to('.commentaire', {
    y:10,
    stagger:{
      each:1
    }
  });
  console.log('hi');
  }
  
  animation.addEventListener('click', animgsap);
  
$(function(){
  $( "a" ).text( "The DOM is now loaded and can be manipulated." );
  $("#cloudcanvas").wordCloud({
    database: {
       // database parameters go here, see parameters section
            dbHost: $('localhost').val(),
						dbUser: $('root').val(),
						dbPass: $('mysql').val(),
						dbName: $('temps').val(),
						selectFields: $('Contenu').val(),
						tableName: $('commentaire').val()
    }
 });
})
*/
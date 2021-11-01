const animation = document.querySelector('.click')
setInterval("my_function();",2000); 
  function my_function(){
    $('#refresh').load(location.href + ' #commentaires');
  }

  const animgsap = function(){
    /*gsap.to('.commentaire', {
    y:10,
    stagger:{
      each:1
    }
  });*/
  console.log('hi');
  }
  
  animation.addEventListener('click', animgsap);
  
setInterval("my_function();",2000); 
  function my_function(){
    $('#refresh').load(location.href + ' #commentaire');
  }
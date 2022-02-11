<?php
require_once ('connexion.php');
function filterwords($filtre){
    $motFiltrer = array('gosh', 'darn', 'poo');
    for ($i = 0; $i < sizeof($motFiltrer); $i++) {
     $filtre = preg_replace_callback('/\b' . $motFiltrer[$i] . '\b/i', function($matches){return str_repeat('*', strlen($matches[0]));}, $filtre);
    }
    return $filtre;
   }

$bdd = getBdd();
$commenter = $bdd->prepare( "INSERT INTO commentaire(Contenu) VALUES(?)");	  
$commenter->execute(array(filterwords($_POST['commentaire'])));
header("Location: index.php");
?>
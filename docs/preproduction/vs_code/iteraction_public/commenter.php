<?php
require_once ('connexion.php');
$bdd = getBdd();
$commenter = $bdd->prepare( "INSERT INTO commentaire(Contenu) VALUES(?)");	  
$commenter->execute(array($_POST['commentaire']));

header("Location: index.php");
?>
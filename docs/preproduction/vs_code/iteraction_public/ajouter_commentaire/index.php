<?php
require_once 'connexion.php';
?>
<html>

<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
</head>
<body>
 <form action="commenter.php" method="POST">
<h4>Ajouter un commentaire</h4>
<textarea rows = "5" cols = "25" name = "commentaire" placeholder="Votre commentaire">
</textarea><br>
<input type="submit" name="commenter" value="Commenter"/><br/>
</form>
<br>
<hr />   
</body>
</html>
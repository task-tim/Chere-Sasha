<?php
require_once 'connexion.php';
$bdd = getBdd();
$requette = $bdd->prepare('SELECT Contenu FROM commentaire');
$executeIsOk = $requette->execute();
$commentaires = $requette->fetchAll();
?>
<html>
<head>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
</head>
<body>
  <div id="refresh">
  <div id="commentaire">
  <?php foreach ($commentaires as $commentaire): ?>
    <p><?= $commentaire['Contenu'] ?></p>
	<hr />
<?php endforeach; ?>
    </div>
  </div> 
  <script src="script.js"></script>
  </script> 
</body>
</html>
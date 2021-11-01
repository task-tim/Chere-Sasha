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
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="click">
  <div id="refresh">
  <div id="commentaires">
  <?php foreach ($commentaires as $commentaire): ?>
    <p class='commentaire'><?= $commentaire['Contenu'] ?></p>
	<hr />
<?php endforeach; ?>
    </div>
  </div>
 </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js"></script>
  <script src="script.js"></script>
  </script> 
  

</body>
</html>
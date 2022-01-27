<?php
require_once 'connexion.php';
?>
<html>

<head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://use.typekit.net/uly2xdd.css">
</head>
<body>
    <div class="boite_message">
    <h1>chère sasha</h1>
    <div class="bulle">
    <img src="media/message_bubble.png" alt="bulle message" class="bulleMessage">
    <p class="texteInvitation">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non condimentum massa. Donec in leo sit amet augue sagittis placerat at vel ipsum. Cras tristique bibendum augue at consequat. In tempor tempus ornare. </p>
 </div>
 <form action="commenter.php" method="POST">
<input type='text' class="espaceCommentaire" rows = "5" cols = "25" name = "commentaire" placeholder="Écrivez un message à Sasha …">
<input class="btnEnvoyer" type="submit" name="commenter" value="Envoyer"/>
</input><br>

</form>
</div>  
</body>
</html> 
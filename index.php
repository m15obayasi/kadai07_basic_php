<?php
require_once("select.php");
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>課題７</title>
    <link rel="stylesheet" href="./css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Cherry+Swash:700" rel="stylesheet">
</head>

<body>
    <div class="top">
        <div class="score"></div>
        <div class="title">
            <span>Epoch Sort</span><br>昔の出来事を選択してください
        </div>
        <div class="timer"></div>
    </div>
    <div class="startHalf">
        <div class="start">START</div>
    </div>
    <div class="upperHalf">
        <div class="upper"></div>
    </div>
    <div class="lowerHalf">
        <div class="lower"></div>
    </div>
    <div class="rankHalf">
        <div class="rankTitle">直近のスコア</div>
    </div>
    <div class="ranking"><?= $view ?></div>

    <div class="kekkaHalf">
        <div class="kekka"></div>
    </div>

    <div class="form">
        <form action="insert.php" method="post">
            <input type="text" name="name" class="text" placeholder="名前を入力して「Enter」">
            <input type="hidden" name="myScore" class="myScore">
        </form>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./js/quiz.js"></script>
</body>

</html>
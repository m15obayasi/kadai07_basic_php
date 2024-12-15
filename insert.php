<?php
$name = $_POST['name'];
$myScore = $_POST['myScore'];

try {
    $pdo = new PDO('mysql:dbname=kadai07_class;charset=utf8;host=localhost', 'root', '');
} catch (PDOException $e) {
    exit('DBConnectError:' . $e->getMessage());
}
$stmt = $pdo->prepare(
    "INSERT INTO
    kadai07_table(id, name, myScore , date)
    VALUES(NULL, :name, :myScore, now())"
);

$stmt->bindValue(':name', $name, PDO::PARAM_STR);
$stmt->bindValue(':myScore', $myScore, PDO::PARAM_STR);

//  3. 実行
$status = $stmt->execute();

if ($status === false) {
    $error = $stmt->errorInfo();
    exit('ErrorMessage:' . $error[2]);
} else {
    header("Location: index.php");
}
?>
<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

if ($_SERVER["REQUEST_METHOD"]=== "OPTIONS") {
    return 0;
}

$input = json_decode(file_get_contents("php://input"));
$tuotenimi = filter_var($input->tuotenimi, FILTER_SANITIZE_STRING);

try {
    $db = openDB();

    $query = $db->prepare("delete from tuote where tuotenimi=(:tuotenimi)");
    $query->bindValue(":tuotenimi",$tuotenimi,PDO::PARAM_STR);
    $query->execute();

    header("HTTP/1.1 200 OK");
    $data = array("tuotenimi" => $tuotenimi);
    print json_encode($data);
    } catch (PDOException $pdoex) {
        returnError($pdoex);
    }
?>
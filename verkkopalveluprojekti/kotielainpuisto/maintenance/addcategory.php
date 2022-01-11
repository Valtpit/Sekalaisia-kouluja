<?php
require_once "../inc/headers.php";
require_once "../inc/functions.php";

$input = json_decode(file_get_contents("php://input"));
$trnimi = filter_var($input->trnimi, FILTER_SANITIZE_STRING);
$teksti = filter_var($input->teksti, FILTER_SANITIZE_STRING);

try {
    $db = openDB();

    $query = $db->prepare("insert into tuoteryhma(trnimi, teksti) values (:trnimi, :teksti)");
    $query->bindValue(":trnimi",$trnimi,PDO::PARAM_STR);
    $query->bindValue(":teksti",$teksti,PDO::PARAM_STR);
    $query->execute();

    header("HTTP/1.1 200 OK");
    $data = array("trnro" => $db->lastInsertId(), "trnimi" => $trnimi, "teksti" => $teksti);
    print json_encode($data);
    } catch (PDOException $pdoex) {
        returnError($pdoex);
    }
?>

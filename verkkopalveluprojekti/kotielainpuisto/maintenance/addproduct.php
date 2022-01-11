<?php
require_once "../inc/headers.php";
require_once "../inc/functions.php";

$input = json_decode(file_get_contents("php://input"));
$tuotenimi = filter_var($input->tuotenimi, FILTER_SANITIZE_STRING);
$hinta = filter_var($input->hinta, FILTER_SANITIZE_STRING);
$kustannus = filter_var($input->kustannus, FILTER_SANITIZE_STRING);
$trnro = filter_var($input->trnro, FILTER_SANITIZE_STRING);
$vari = filter_var($input->vari, FILTER_SANITIZE_STRING);
$maara = filter_var($input->maara, FILTER_SANITIZE_STRING);
$koko = filter_var($input->koko, FILTER_SANITIZE_STRING);
$lankatyyppiElain = filter_var($input->lankaTyyppiElain, FILTER_SANITIZE_STRING);
$pituus = filter_var($input->pituus, FILTER_SANITIZE_STRING);
$teksti = filter_var($input->teksti, FILTER_SANITIZE_STRING);


try {
    $db = openDB();

    $query = $db->prepare("insert into tuote(tuotenimi, hinta, kustannus, trnro, vari, maara, koko, lankaTyyppiElain, pituus, teksti) values (:tuotenimi, :hinta, :kustannus, :trnro, :vari, :maara, :koko, :lankaTyyppiElain, :pituus, :teksti)");
    $query->bindValue(":tuotenimi",$tuotenimi,PDO::PARAM_STR);
    $query->bindValue(":hinta",$hinta,PDO::PARAM_INT);
    $query->bindValue(":kustannus",$kustannus,PDO::PARAM_INT);
    $query->bindValue(":trnro",$trnro,PDO::PARAM_INT);
    $query->bindValue(":vari",$vari,PDO::PARAM_STR);
    $query->bindValue(":maara",$maara,PDO::PARAM_STR);
    $query->bindValue(":koko",$koko,PDO::PARAM_STR);
    $query->bindValue(":lankaTyyppiElain",$lankatyyppiElain,PDO::PARAM_STR);
    $query->bindValue(":pituus",$pituus,PDO::PARAM_STR);
    $query->bindValue(":teksti",$teksti,PDO::PARAM_STR);
    $query->execute();

    header("HTTP/1.1 200 OK");
    $data = array("tuotenro" => $db->lastInsertId(), "tuotenimi" => $tuotenimi, "hinta" => $hinta, "kustannus" => $kustannus, "trnro" => $trnro, "vari" => $vari, "maara" => $maara, "koko" => $koko, "lankaTyyppiElain" => $lankatyyppiElain, "pituus" => $pituus, "teksti" => $teksti);
    print json_encode($data);
    } catch (PDOException $pdoex) {
        returnError($pdoex);
    }
?>

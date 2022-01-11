<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

// Luetaan input tiedot JSON muotoon
$input = json_decode(file_get_contents('php://input'));
$fname = filter_var($input->asETUnimi, FILTER_SANITIZE_STRING);
$lname = filter_var($input->asSUKUnimi, FILTER_SANITIZE_STRING);
$zip = filter_var($input->postinro, FILTER_SANITIZE_STRING);
$city = filter_var($input->postitmp, FILTER_SANITIZE_STRING);
$phone = filter_var($input->puh, FILTER_SANITIZE_STRING);
$mail = filter_var($input->sposti, FILTER_SANITIZE_STRING);
$cart = $input->cart;

$db = null; //nimeä ja luo muuttujat batabase yhteyttä varten
try{
    $db = openDb(); //luo database yhteys
    $db->beginTransaction(); //oston database yhteys
    // ostajan lisäys
    $sql = "insert into asiakas(asETUnimi, asSUKUnimi, postinro, postitmp, puh, sposti) values
    ('" .
        filter_var($fname, FILTER_SANITIZE_STRING) . "','".
        filter_var($lname, FILTER_SANITIZE_STRING) . "','".
        filter_var($zip, FILTER_SANITIZE_STRING) . "','".
        filter_var($city, FILTER_SANITIZE_STRING) . "','".
        filter_var($phone, FILTER_SANITIZE_STRING) . "','".
        filter_var($mail, FILTER_SANITIZE_STRING)
    . "')";

    $asID = executeInsert($db, $sql);

    // insert tilaus
    $sql = "insert into `tilaus` (asID) values ($asID)";
    $tilausID = executeInsert($db, $sql);

    // lisätään tilaus rivit loopin kautta ostoskoriin -> array
    foreach ($cart as $product){
        $sql = "insert into tilausrivi (tilausID,tuotenro, kpl) values ("
        .
            $tilausID ."," .
            $product->tuotenro. "," .
            $product->amount
        . ")";
        executeInsert($db,$sql);
    }

    $db->commit(); // tallenna osto
    // palauta 200 status ja asID
    header('HTTP/1.1 200 OK');
    $data = array('id' => $asID);
    echo json_encode($data);

}
catch(PDOException $pdoex){
    $db->rollback();
    returnError($pdoex);
}
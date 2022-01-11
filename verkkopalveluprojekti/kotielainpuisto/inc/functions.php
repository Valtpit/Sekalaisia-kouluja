<?php

/* Tietokannan yhteystiedot */
function openDb(): object {
    $ini = parse_ini_file("../config.ini", true);

    $host = $ini['host'];
    $database = $ini['database'];
    $user = $ini['user'];
    $password = $ini['password'];
    $db = new PDO('mysql:host=localhost;dbname=kotielainpuisto;charset=utf8','root','');
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    return $db;
}
/* select lause */
function selectAsJson(object $db, string $sql):void {
    $query = $db->query($sql);
    $results = $query->fetchAll(PDO::FETCH_ASSOC);
    header('HTTPS/1.1 200 OK');
    echo json_encode($results);
}
/** execute insert lause */
function executeInsert(object $db, string $sql):int {
    $query = $db->query($sql);
    return $db->lastInsertId();
}

/* Error koodi */
function returnError(PDOException $pdoex):void {
    header('HTTP/1.1 500 Internal Server Error');
    $error = array('error' => $pdoex->getMessage());
    echo json_encode($error);
    exit;
}

/**
 * Tarkistaa onko käyttäjä tietokannassa ja onko salasana validi
 */
function checkUser(PDO $dbcon, $sposti, $salasana){

    //Sanitoidaan. Lisätty tuntien jälkeen
    $sposti = filter_var($sposti, FILTER_SANITIZE_STRING);
    $salasana = filter_var($salasana, FILTER_SANITIZE_STRING);

    try{
        $sql = "SELECT password FROM user WHERE sposti=?";  //komento, arvot parametreina
        $prepare = $dbcon->prepare($sql);   //valmistellaan
        $prepare->execute(array($sposti));  //kysely tietokantaan

        $rows = $prepare->fetchAll(); //haetaan tulokset (voitaisiin hakea myös eka rivi fetch ja tarkistus)

        //Käydään rivit läpi (max yksi rivi tässä tapauksessa) 
        foreach($rows as $row){
            $pw = $row["password"];  //password sarakkeen tieto (hash salasana tietokannassa)
            if( password_verify($salasana, $pw) ){  //tarkistetaan salasana tietokannan hashia vasten
                return true;
            }
        }

        //Jos ei löytynyt vastaavuutta tietokannasta, palautetaan false
        return false;

    }catch(PDOException $e){
        echo '<br>'.$e->getMessage();
    }
}

/**
 * Luo tietokantaan uuden käyttäjän ja hashaa salasanan
 */
function createUser(PDO $dbcon, $fname, $lname, $sposti, $salasana){

    //Sanitoidaan. Lisätty tuntien jälkeen.
    $fname = filter_var($fname, FILTER_SANITIZE_STRING);
    $lname = filter_var($lname, FILTER_SANITIZE_STRING);
    $sposti = filter_var($sposti, FILTER_SANITIZE_STRING);
    $salasana = filter_var($salasana, FILTER_SANITIZE_STRING);

    try{
        $hash_pw = password_hash($salasana, PASSWORD_DEFAULT); //salasanan hash
        $sql = "INSERT IGNORE INTO user VALUES (?,?,?,?)"; //komento, arvot parametreina
        $prepare = $dbcon->prepare($sql); //valmistellaan
        $prepare->execute(array($fname, $lname, $sposti, $hash_pw));  //parametrit tietokantaan
    }catch(PDOException $e){
        echo '<br>'.$e->getMessage();
    }
}

/**
 * Luo ja palauttaa tietokantayhteyden.
 */
function createDbConnection(){

    try{
        $dbcon = new PDO('mysql:host=localhost;dbname=kotielainpuisto', 'root', '');
        $dbcon->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo '<br>'.$e->getMessage();
    }

    return $dbcon;
}

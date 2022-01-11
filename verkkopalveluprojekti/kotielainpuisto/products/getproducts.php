<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

// url parameter
$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
// parameter separation with slash -> /
$parameters = explode('/',$uri);
// category id parameter, after slash
$category_id = $parameters[1];

try {
    $db = openDb();
    selectAsJson($db,"select * from tuote where trnro = $category_id");
} catch (PDOException $pdoex) {
    returnError($pdoex);
}
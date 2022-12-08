<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


require_once('Languages.php');


$res = array();
$res["error"] = false;
$res["data"] = 'Server Down';


$type = $_POST['type'];
$code = $_POST['code'];



$executor = new Executor();

$lang;

switch ($type) {
    case 'py':
        $lang = new PythonLang();
        break;
    case 'js':
        $lang = new NodeLang();
        break;
}

$output = $executor->execute($lang, $code);
$res['data'] = $output;

echo json_encode($res);

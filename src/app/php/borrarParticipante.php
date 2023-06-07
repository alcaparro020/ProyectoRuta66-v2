<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);
//echo $params->email;
//class user {
//}
//$params = new user;
//$params->email="algo@email.com";
//$params->password="1234";
include("index.php");
$con=retornarConecction();

$query = "DELETE FROM `Registros_Eventos` WHERE `Id`='$params->idParticipante' AND `Id_Evento`='$params->idEvento'";
//echo $query;
mysqli_query($con, $query);
//echo $registros;
//$cad=json_encode($query);
//echo $cad;
//header('Content-Type: application/json');

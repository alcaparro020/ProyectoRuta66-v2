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

$query1 = "DELETE FROM `Registros_Eventos` WHERE `Id_Evento`='$params->Id'";
mysqli_query($con, $query1);

$query5 = "DELETE FROM `Registros_Eventos` WHERE `Dni_Usuario`='$params->dni'";
mysqli_query($con, $query5);

$query3 = "DELETE FROM `Coches` WHERE `Dni_Propietario`='$params->dni'";
mysqli_query($con, $query3);

$query2 = "DELETE FROM `Eventos` WHERE `Dni_Usuario_Creacion`='$params->dni'";
mysqli_query($con, $query2);

$query4 = "DELETE FROM `usuarios` WHERE `dni`='$params->dni'";
mysqli_query($con, $query4);

//$query2 = "DELETE FROM `Eventos` WHERE `Dni_Usuario_Creacion`='$params->dni'";
//mysqli_query($con, $query2);

//$cad=json_encode($query);
//echo $cad;
//header('Content-Type: application/json');

?>

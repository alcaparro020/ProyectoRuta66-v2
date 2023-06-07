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

$query = "SELECT * FROM `Eventos` WHERE `Dni_Usuario_Creacion`='$params->dni'";
//echo $query;
$registros=mysqli_query($con, $query);
//echo $registros;
$vec=[];

while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>

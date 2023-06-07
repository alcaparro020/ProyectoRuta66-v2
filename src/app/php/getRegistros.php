<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);
include("index.php");
$con=retornarConecction();

$query = "SELECT * FROM `Registros_Eventos` WHERE `Id_Evento`='$params->Id'";
$registros=mysqli_query($con, $query);
$vec=[];

while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>

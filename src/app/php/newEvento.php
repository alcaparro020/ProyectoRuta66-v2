<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

include("index.php");
$con=retornarConecction();
//echo $con;
$query = "INSERT INTO `Eventos`(`Dni_Usuario_Creacion`, `Ubicacion`, `Fecha`, `Hora`, `Descripcion`, `Permite_Modificados`, `Permite_Sin_Homologar`, `Numero_Plazas`, `Imagenes`) 
                VALUES ('$params->Dni_Usuario_Creacion','$params->Ubicacion','$params->Fecha','$params->Hora','$params->Descripcion','$params->Permite_Modificados','$params->Permite_Sin_Homologar'
,'$params->Numero_Plazas', '$params->Imagenes')";
mysqli_query($con, $query);

$cad=json_encode($query);
echo $cad;
header('Content-Type: application/json');

?>

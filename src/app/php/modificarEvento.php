<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

include("index.php");
$con=retornarConecction();
//echo $con;
//$query = "INSERT INTO `Coches` (`id`, `Dni_Propietario`, `Matricula`, `Marca`, `Modelo`, `Color`, `Modificado`, `Homologado`) 
//                VALUES (NULL, '$params->Dni_Propietario','$params->Matricula','$params->Marca','$params->Modelo','$params->Color','$params->Modificado','$params->Homologado')";

$query = "UPDATE `Eventos` SET `Ubicacion`='$params->Ubicacion',`Fecha`='$params->Fecha',`Hora`='$params->Hora',
`Descripcion`='$params->Descripcion',`Permite_Modificados`='$params->Permite_Modificados',`Permite_Sin_Homologar`='$params->Permite_Sin_Homologar',`Numero_Plazas`='$params->Numero_Plazas',
`Imagenes`='$params->Imagenes' WHERE `Id` ='$params->IdEvento'";
mysqli_query($con, $query);

//$cad=json_encode($query);
//echo $cad;
//header('Content-Type: application/json');

?>

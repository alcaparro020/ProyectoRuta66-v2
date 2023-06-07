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

$query = "UPDATE `Coches` SET `Dni_Propietario`='$params->Dni_Propietario',`Matricula`='$params->Matricula',`Marca`='$params->Marca',`Modelo`='$params->Modelo',
`Color`='$params->Color',`Modificado`='$params->Modificado',`Homologado`='$params->Homologado' WHERE `Matricula`='$params->Matricula'";
mysqli_query($con, $query);
?>

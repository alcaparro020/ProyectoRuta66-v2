<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

include("index.php");
$con=retornarConecction();
//echo $con;

if($params->matricula_Coche_Participante==""){
$query = "INSERT INTO `Registros_Eventos`(`Dni_Usuario`, `Id_Evento`, `Participante`, `Matricula_Coche_Participante`) VALUES
                ('$params->dni_Usuario','$params->id_Evento','$params->participante',null)";

}else{
$query = "INSERT INTO `Registros_Eventos`(`Dni_Usuario`, `Id_Evento`, `Participante`, `Matricula_Coche_Participante`) VALUES
                ('$params->dni_Usuario','$params->id_Evento','$params->participante','$params->matricula_Coche_Participante')";
}
mysqli_query($con, $query);

$cad=json_encode($query);
echo $cad;
header('Content-Type: application/json');

?>


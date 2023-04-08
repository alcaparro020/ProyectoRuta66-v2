<?php
header("Access-Control-Allow-Origin: www.alvarogomezpracticas.es");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
if (!$jsonUsuario) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("insert into usuario(dni, nombre, apellidos, edad, email, num_telefono, contrasenia) values (?,?,?,?,?,?,?)");
$resultado = $sentencia->execute([$jsonUsuario->dni, $jsonUsuario->nombre, $jsonUsuario->apellidos, $jsonUsuario->edad,
$jsonUsuario->email, $jsonUsuario->num_telefono, $jsonUsuario->contrasenia]);
echo json_encode([
    "resultado" => $resultado,
]);
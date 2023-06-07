<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);
//echo "entra a la pagina";

//class usuario {
//public $dni;
//public $nombre;
//public $apellidos;
//}
//$params = new usuario();
//$params->dni="123e";
//$params->nombre="jose";
//$params->apellidos="perez";
//$params->edad=20;
//$params->email="algo@email.com";
//$params->telefono=123456978;
//$params->contrasenia="1234";

include("index.php");
$con=retornarConecction();

$query = "insert into usuarios(dni,nombre,apellidos,edad,email,telefono,contrasenia) values 
                ('$params->dni','$params->nombre','$params->apellidos',$params->edad,'$params->email',$params->telefono,'$params->contrasenia')";
//echo $query;
mysqli_query($con, $query);

//class Result {}

//$response = new Result();
//$response->resultado = "OK";
//$response->mensaje = "datos grabados";

//header('Content_Type: application/json');
//echo json_encode($response);
?>

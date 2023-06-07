<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

if($_SERVER['REQUEST_METHOD'] === 'POST') {
   // Recibir la imagen en formato JSON
   $json = file_get_contents('php://input');
   $data = json_decode($json);

   // Obtener el nombre de archivo y la imagen en base64
   $nombreArchivo = $data->nombreArchivo;
   $base64 = $data->base64;

   // Decodificar la imagen en base64
   $imagen = base64_decode($base64);

//   if($imagen === false) {
//      $algo = "error cadena no valida";
//}else {$algo = "ta buena";}

   // Guardar la imagen en el servidor
   $rutaGuardado = '/var/www/html/img_Eventos/'.$nombreArchivo;
   file_put_contents($rutaGuardado, $imagen);

   // Enviar una respuesta al cliente
//   $response = array("algo1" => $algo);
   $response = array('algo1' => $nombreArchivo, 'algo2' => $base64, 'algo3' => $imagen, 'algo4' => $rutaGuardado);
   echo json_encode($response);
}
?>

<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

//$directorioImagenes = '/var/www/html/img_Eventos/';
//$imagenes = array_diff(scandir($directorioImagenes), array('.', '..'));

//echo json_encode($imagenes);

$directorioImagenes = './img_Eventos/';
$imagenes = array_diff(scandir($directorioImagenes), array('.', '..'));
var_dump($imagenes);
$resultado = array();

foreach ($imagenes as $imagen) {
    $imagenBase64 = base64_encode(file_get_contents($directorioImagenes . $imagen));
    array_push($resultado, $imagenBase64);
}

echo json_encode($resultado);
?>

<?php
$contrasenia = "2DAM";
$usuario = "root";
$nombre_base_de_datos = "ruta66";
try {
    return new PDO('mysql:host=www.alvarogomezpracticas.es;dbname=' . $nombre_base_de_datos, $usuario, $contrasenia);
} catch (Exception $e) {
    echo "Ocurrió algo con la base de datos: " . $e->getMessage();
}
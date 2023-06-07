<?php

//ini_set('display_errors', 1);
//phpinfo();

function retornarConecction() {
        $servername = "172.17.0.2";
        $username = "root";
        $password = "2DAM";
        $dbname = "ruta66";

        // Crear conexi  n
        $conn = mysqli_connect($servername, $username, $password, $dbname);

        // Verificar conexi  n
        if (!$conn) {
                die("Conexi  n fallida: " . mysqli_connect_error());
        } else {
//              echo "Conexion exitosa";
                return $conn;
        }
        //echo "Conexi  n exitosa";
}
?>

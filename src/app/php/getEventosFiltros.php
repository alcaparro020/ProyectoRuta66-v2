<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, XRequested-With, Content-Type, Accept');

$json = file_get_contents('php://input');
$params = json_decode($json);

include("index.php");
$con=retornarConecction();

//$query = "SELECT * FROM `Eventos` WHERE `Fecha`='$params->fecha',`Hora`='$params->hora',`Permite_Modificados`='$params->permiteModificados',
//`Permite_Sin_Homologar`='$params->permiteSinHomologar',`Numero_Plazas`='$params->numPlazas', ORDER by id DESC";

// Variables de filtros
$fecha = $params->fecha ?? '';
$hora = $params->hora ?? '';
$permiteModificados = $params->permiteModificados ?? '';
$permiteSinHomologar = $params->permiteSinHomologar ?? '';
$numeroPlazas = $params->numPlazas ?? '';

// Arreglo para almacenar las condiciones del filtro
$condiciones = array();

// Agregar condiciones al arreglo seg  n los filtros proporcionados
if (!empty($fecha)) {
    $condiciones[] = "`Fecha` = '" . $fecha . "'";
}

if (!empty($hora)) {
    $condiciones[] = "`Hora` = '" . $hora . "'";
}

if (!empty($permiteModificados)) {
    $condiciones[] = "`Permite_Modificados` = '" . $permiteModificados . "'";
}

if (!empty($permiteSinHomologar)) {
    $condiciones[] = "`Permite_Sin_Homologar` = '" . $permiteSinHomologar . "'";
}

if (!empty($numeroPlazas)) {
    $condiciones[] = "`Numero_Plazas` = '" . $numeroPlazas . "'";
}

// Construir la consulta SQL
$sql = "SELECT * FROM `Eventos`";
if (!empty($condiciones)) {
    $sql .= " WHERE " . implode(" OR ", $condiciones);
}
$sql .= " ORDER BY id DESC";

$registros=mysqli_query($con, $sql);

$vec=[];

while ($reg=mysqli_fetch_array($registros))
{
$vec[]=$reg;
}

$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');
?>

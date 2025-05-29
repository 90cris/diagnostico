<?php
$host = "localhost";
$dbname = "diagnostico";
$user = "postgres";
$pass = "1"; 

try {
  $conexion = new PDO("pgsql:host=$host;dbname=$dbname", $user, $pass);
  $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  die("Error al conectar con la base de datos: " . $e->getMessage());
}
?>
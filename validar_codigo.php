<?php
require 'db.php';

$codigo = $_GET['codigo'] ?? '';

if ($codigo === '') {
  echo 'libre';
  exit;
}

try {
  $sql = "SELECT 1 FROM productos WHERE codigo = :codigo LIMIT 1";
  $stmt = $conexion->prepare($sql);
  $stmt->execute([':codigo' => $codigo]);

  if ($stmt->fetch()) {
    echo 'existe';
  } else {
    echo 'libre';
  }
} catch (PDOException $e) {
  echo 'error';
}
?>

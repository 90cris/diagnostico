<?php
require 'db.php';

function guardarProducto($data) {
  global $conexion;
  try {
    $sql = "INSERT INTO productos (codigo, nombre, bodega, sucursal, moneda, precio, tipo_material, descripcion)
            VALUES (:codigo, :nombre, :bodega, :sucursal, :moneda, :precio, :materiales, :descripcion)";
    $stmt = $conexion->prepare($sql);
    $stmt->execute([
      ":codigo" => $data['codigo'],
      ":nombre" => $data['nombre'],
      ":bodega" => $data['bodega'],
      ":sucursal" => $data['sucursal'],
      ":moneda" => $data['moneda'],
      ":precio" => $data['precio'],
      ":materiales" => $data['materiales'],
      ":descripcion" => $data['descripcion']
    ]);
    return true;
  } catch (PDOException $e) {
    return false;
  }
}

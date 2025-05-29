<?php
require 'funciones.php';

$data = [
  'codigo' => $_POST['codigo'] ?? '',
  'nombre' => $_POST['nombre'] ?? '',
  'bodega' => $_POST['bodega'] ?? '',
  'sucursal' => $_POST['sucursal'] ?? '',
  'moneda' => $_POST['moneda'] ?? '',
  'precio' => $_POST['precio'] ?? 0,
  'materiales' => $_POST['materiales'] ?? '',
  'descripcion' => $_POST['descripcion'] ?? ''
];

$resultado = guardarProducto($data);

echo $resultado ? "Producto guardado exitosamente." : "Error al guardar el producto.";

document.getElementById("guardarBtn").addEventListener("click", async function (e) {
  e.preventDefault();

  const codigo = document.getElementById("codigo").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const precio = document.getElementById("precio").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  const bodega = document.getElementById("bodega").value;
  const sucursal = document.getElementById("sucursal").value;
  const moneda = document.getElementById("moneda").value;

  const materiales = ["plastico", "metal", "madera", "vidrio", "textil"]
    .filter(id => document.getElementById(id).checked);

  if (codigo === "") {
    alert("El código del producto no puede estar en blanco.");
    return;
  }
  if (codigo.length < 5 || codigo.length > 15) {
    alert("El código del producto debe tener entre 5 y 15 caracteres.");
    return;
  }
  const codigoRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,15}$/;
  if (!codigoRegex.test(codigo)) {
    alert("El código del producto debe contener letras y números.");
    return;
  }

  const existe = await fetch(`validar_codigo.php?codigo=${encodeURIComponent(codigo)}`)
    .then(res => res.text());
  if (existe === "existe") {
    alert("El código del producto ya está registrado.");
    return;
  }

  if (nombre === "") {
    alert("El nombre del producto no puede estar en blanco.");
    return;
  }
  if (nombre.length < 2 || nombre.length > 50) {
    alert("El nombre del producto debe tener entre 2 y 50 caracteres.");
    return;
  }

  if (precio === "") {
    alert("El precio del producto no puede estar en blanco.");
    return;
  }

  const precioRegex = /^\d+(\.\d{1,2})?$/;
  if (!precioRegex.test(precio) || parseFloat(precio) <= 0) {
    alert("El precio del producto debe ser un número positivo con hasta dos decimales.");
    return;
  }

  if (materiales.length < 2) {
    alert("Debe seleccionar al menos dos materiales para el producto.");
    return;
  }

  if (bodega === "") {
    alert("Debe seleccionar una bodega.");
    return;
  }

  if (sucursal === "") {
    alert("Debe seleccionar una sucursal para la bodega seleccionada.");
    return;
  }

  if (moneda === "") {
    alert("Debe seleccionar una moneda para el producto.");
    return;
  }

  if (descripcion === "") {
    alert("La descripción del producto no puede estar en blanco.");
    return;
  }

  if (descripcion.length < 10 || descripcion.length > 1000) {
    alert("La descripción del producto debe tener entre 10 y 1000 caracteres.");
    return;
  }

  alert("Validaciones completadas. Listo para enviar el producto.");

  const datos = new URLSearchParams();
  datos.append("codigo", codigo);
  datos.append("bodega", bodega);
  datos.append("moneda", moneda);
  datos.append("nombre", nombre);
  datos.append("sucursal", sucursal);
  datos.append("precio", precio);
  datos.append("descripcion", descripcion);
  datos.append("materiales", materiales.join(", "));

fetch("procesos.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: datos.toString()
})
  .then(async res => {
    const texto = await res.text();
    console.log("Respuesta cruda del servidor:", texto); // <-- Aquí lo verás en consola
    if (!res.ok) {
      throw new Error(`Error HTTP ${res.status}: ${texto}`);
    }
    alert(texto);
  })
  .catch(error => {
    console.error("Error en envío:", error.message); // <-- Este también te avisa del error HTTP
    alert("Error al enviar el producto.");
  });
});

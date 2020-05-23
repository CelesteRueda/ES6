"use strict";

var mensaje = "No completo el campo";

function nuevoUsuario() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mensaje;
  var apellido = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mensaje;
  var edad = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : mensaje;
  return "Nombre: ".concat(nombre, ", Apellido: ").concat(apellido, ", Edad: ").concat(edad);
}

console.log(nuevoUsuario("Celeste", "Rueda", "28 años"));
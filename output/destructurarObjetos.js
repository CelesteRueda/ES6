"use strict";

var usuario = {
  nombre: "Celeste",
  apellido: "Rueda",
  correo: "chele.rueda@gmail.com",
  edad: "28 años"
};

var mostrarDatos = function mostrarDatos(_ref) {
  var nombre = _ref.nombre,
      _ref$ocupacion = _ref.ocupacion,
      ocupacion = _ref$ocupacion === void 0 ? "No especificado" : _ref$ocupacion;
  return console.log("".concat(nombre, " es ").concat(ocupacion));
};

mostrarDatos(usuario);
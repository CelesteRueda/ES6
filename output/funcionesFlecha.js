"use strict";

var nombres = ["Celeste", "Facu", "Leon"];
var nombres_longitud = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras");
});
console.log(nombres_longitud);
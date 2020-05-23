"use strict";

//parametro Rest recibe los argumentos
var mostrarDatos = function mostrarDatos() {
  for (var _len = arguments.length, datos = new Array(_len), _key = 0; _key < _len; _key++) {
    datos[_key] = arguments[_key];
  }

  console.log(datos);
}; //parametro Spread envia los argumentos (apartir de un arreglo por ejemplo)


var arregloDatos = ["Celeste Rueda", "28 años", "Estudiante de programación", "Mamá"];
mostrarDatos.apply(void 0, arregloDatos);
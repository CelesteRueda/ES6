"use strict";

//Nuevos Metodos con ECMASCRIPT 6 
var texto = 'Hola Mundo';
console.log(texto, 'empieza con a:', texto.startsWith('a'));
console.log(texto, 'termina con o:', texto.endsWith('o'));
console.log(texto, 'incluye la palabra Mundo:', texto.includes('Mundo'));
var amigas = ['Carlu', 'Belenis', 'Rolanda'];
console.log(amigas.includes('Francis'));
console.log(amigas.find(function (amiga) {
  return amiga.length > 5;
}));
console.log(amigas.findIndex(function (amiga) {
  return amiga === 'Rolanda';
}));
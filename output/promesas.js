"use strict";

var promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    var exito = true;

    if (exito) {
      resolve();
    } else {
      reject();
    }
  }, 4000);
});
promesa.then(function () {
  alert("Tuvo exito");
});
promesa["catch"](function () {
  alert("No tuvo exito");
});
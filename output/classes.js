"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Usuario = /*#__PURE__*/function () {
  function Usuario(nombre, correo, edad) {
    _classCallCheck(this, Usuario);

    this.nombre = nombre, this.correo = correo, this.edad = edad;
  }

  _createClass(Usuario, [{
    key: "mostrarDatos",
    value: function mostrarDatos() {
      return "\n        Nombre: ".concat(this.nombre, " <br/>\n        Correo: ").concat(this.correo, " <br/>\n        Edad: ").concat(this.edad, " <br/>\n        <hr/>\n        ");
    }
  }]);

  return Usuario;
}();

var celeste = new Usuario("Celeste", "chele.rueda@gmail.com", "28 años");
document.write(celeste.mostrarDatos());
var facundo = new Usuario("Facundo", "bla bla", "30 años");
document.write(facundo.mostrarDatos());
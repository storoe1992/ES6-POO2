"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cliente = new _cliente["default"]('Sergio');
var impuesto = new _impuestos["default"]();
impuesto.deducciones = 19;
impuesto.monto_bruto_anual = 40;
cliente.impuesto = impuesto;
console.log(cliente.nombre);
console.log(cliente.calcularImpuesto());
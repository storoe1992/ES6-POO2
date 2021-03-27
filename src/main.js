import Cliente from './cliente.js'
import Impuestos from './impuestos.js'

const cliente = new Cliente('Sergio');
const impuesto = new Impuestos();
impuesto.deducciones = 19;
impuesto.monto_bruto_anual = 40;
cliente.impuesto = impuesto;
console.log( cliente.nombre);
console.log(cliente.calcularImpuesto())
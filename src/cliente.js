export default class Cliente {
    constructor(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set impuesto(impuesto){
        this._impuesto = impuesto;
    }

    calcularImpuesto(){
        return (this._impuesto.monto_bruto_anual - this._impuesto.deducciones) * 0,21;
    }
}
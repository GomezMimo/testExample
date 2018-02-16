class ingenieriaDeSoftware {
    constructor(numero1, numero2) {
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    sumarNumeros(){
        return this.numero1 + this.numero2;
    }

    restarNumeros(){
        return this.numero1 - this.numero2;
    }

    multiplicarNumeros(){
        return this.numero1 * this.numero2;
    }
}

module.exports = ingenieriaDeSoftware;
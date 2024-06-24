"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hospedagem {
    constructor(cliente, acomodacao, checkIn, checkOut) {
        this.cliente = cliente;
        this.acomodacao = acomodacao;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
    }
    get Cliente() { return this.cliente; }
    get Acomodacao() { return this.acomodacao; }
    get CheckIn() { return this.checkIn; }
    get CheckOut() { return this.checkOut; }
}
exports.default = Hospedagem;

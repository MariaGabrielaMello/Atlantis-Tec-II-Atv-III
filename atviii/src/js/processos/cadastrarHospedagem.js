"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuHospedagem_1 = __importDefault(require("../menus/menuHospedagem"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const hospedagem_1 = __importDefault(require("../modelos/hospedagem"));
class CadastroHospedagem extends processo_1.default {
    constructor() {
        super();
        armazem_1.default.InstanciaUnica.Clientes.forEach((cliente, index) => {
            console.log(`${index + 1}: ${cliente.Nome}`);
        });
        let indexCliente = this.entrada.receberNumero('Selecione um Cliente para definir a acomodação') - 1;
        this.cliente = armazem_1.default.InstanciaUnica.Clientes[indexCliente];
        this.menu = new menuHospedagem_1.default();
    }
    processar() {
        this.menu.mostrar();
        let index = this.entrada.receberNumero('Qual a opção desejada?') - 1;
        let acomodacao = armazem_1.default.InstanciaUnica.Acomodacoes[index];
        let checkIn = this.entrada.receberData('Qual a data de  CheckIn?');
        let checkOut = this.entrada.receberData('Qual a data de Checkout?');
        let hospedagem = new hospedagem_1.default(this.cliente, acomodacao, checkIn, checkOut);
        armazem_1.default.InstanciaUnica.Hospedagens.push(hospedagem);
    }
}
exports.default = CadastroHospedagem;

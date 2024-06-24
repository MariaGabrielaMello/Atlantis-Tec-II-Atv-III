"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const armazem_1 = __importDefault(require("../dominio/armazem"));
const impressorCliente_1 = __importDefault(require("../impressores/impressorCliente"));
const processo_1 = __importDefault(require("../abstracoes/processo"));
class ListagemDependentes extends processo_1.default {
    constructor() {
        super();
        this.clientes = armazem_1.default.InstanciaUnica.Clientes;
    }
    processar() {
        console.clear();
        console.log('Iniciando a listagem dos clientes dependentes...');
        this.clientes.forEach(cliente => {
            if (this.dependente(cliente)) {
                this.impressor = new impressorCliente_1.default(cliente);
                console.log(this.impressor.imprimir());
            }
        });
    }
    dependente(cliente) {
        return cliente.Titular !== undefined;
    }
}
exports.default = ListagemDependentes;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const impressorCliente_1 = __importDefault(require("../impressores/impressorCliente"));
class ListagemDependentesPorTitular extends processo_1.default {
    constructor() {
        super();
    }
    processar() {
        console.clear();
        let armazem = armazem_1.default.InstanciaUnica;
        let cpf = this.entrada.receberTexto('Qual cpf do cliente?');
        let clienteTitular = armazem.findByCpf(cpf);
        if (!clienteTitular) {
            console.log('Cliente titular não encontrado');
            return;
        }
        console.log('Iniciando a listagem dos clientes dependentes...');
        clienteTitular.Dependentes.forEach(cliente => {
            this.impressor = new impressorCliente_1.default(cliente);
            console.log(this.impressor.imprimir());
        });
    }
}
exports.default = ListagemDependentesPorTitular;

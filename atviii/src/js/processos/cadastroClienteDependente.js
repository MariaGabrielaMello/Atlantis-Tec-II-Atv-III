"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
const cliente_1 = __importDefault(require("../modelos/cliente"));
const cadastrarDocumentosCliente_1 = __importDefault(require("./cadastrarDocumentosCliente"));
class CadastroClienteDependente extends processo_1.default {
    processar() {
        let armazem = armazem_1.default.InstanciaUnica;
        let cpf = this.entrada.receberTexto('Qual cpf do cliente titular?');
        let clienteTitular = armazem.findByCpf(cpf);
        if (!clienteTitular) {
            console.log('Cliente titular não encontrado');
            return;
        }
        console.log('Iniciando o cadastro de um novo cliente dependente...');
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?');
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?');
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?');
        let endereco = clienteTitular.Endereco.clonar();
        let cliente = new cliente_1.default(nome, nomeSocial, dataNascimento);
        cliente.Endereco = endereco;
        cliente.Titular = clienteTitular;
        clienteTitular.Dependentes.push(cliente);
        this.processo = new cadastrarDocumentosCliente_1.default(cliente);
        this.processo.processar();
        armazem.Clientes.push(cliente);
        console.log('Finalizando o cadastro do cliente dependente...');
    }
}
exports.default = CadastroClienteDependente;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class EditarClienteDependente extends processo_1.default {
    processar() {
        const armazem = armazem_1.default.InstanciaUnica;
        let cpf = this.entrada.receberTexto('Qual cpf do cliente?');
        let cliente = armazem.findByCpf(cpf);
        if (!cliente) {
            console.log('Cliente não encontrado');
            return;
        }
        console.log('Iniciando a edição do cliente ...');
        let nome = this.entrada.receberTexto('Qual o novo nome?');
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social?');
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento?');
        if (nome)
            cliente.Nome = nome;
        if (nomeSocial)
            cliente.NomeSocial = nomeSocial;
        if (dataNascimento)
            cliente.DataNascimento = dataNascimento;
        cliente.Documentos.forEach(documento => {
            console.log(documento);
            let numero = this.entrada.receberTexto('Qual o novo número?');
            if (numero)
                documento.Numero = numero;
        });
        console.log('Finalizando a edição do cliente...');
    }
}
exports.default = EditarClienteDependente;

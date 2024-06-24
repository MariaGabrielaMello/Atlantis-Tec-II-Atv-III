"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ExcluirClienteTitular extends processo_1.default {
    processar() {
        console.clear();
        console.log('Processo de remoção de cliente principal iniciado...');
        const armazem = armazem_1.default.InstanciaUnica;
        const clientesPrincipais = armazem.Clientes.filter(cliente => cliente.Titular === undefined);
        if (clientesPrincipais.length === 0) {
            console.log('Nenhum cliente principal disponível para remoção.');
            return;
        }
        console.log('Lista de Clientes Principais:');
        clientesPrincipais.forEach((cliente, indice) => {
            console.log(`${indice + 1}. ${cliente.Nome}`);
        });
        const escolhaIndice = this.entrada.receberNumero('Informe o número correspondente ao cliente principal que deseja remover:');
        const clienteEscolhido = this.obterClientePrincipalPorIndice(escolhaIndice);
        if (clienteEscolhido) {
            armazem_1.default.InstanciaUnica.removerCliente(clienteEscolhido);
            console.log('Cliente principal removido com sucesso.');
        }
        else {
            console.log('Número informado inválido.');
        }
    }
    obterClientePrincipalPorIndice(indice) {
        const clientesPrincipais = armazem_1.default.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesPrincipais[indice - 1];
    }
}
exports.default = ExcluirClienteTitular;

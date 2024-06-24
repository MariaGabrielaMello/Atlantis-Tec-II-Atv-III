"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ExclusaoClienteTitular extends processo_1.default {
    processar() {
        console.log('Iniciando a exclusão de um cliente...');
        // Obter a instância única do Armazem
        let armazem = armazem_1.default.InstanciaUnica;
        // Listar os clientes existentes
        armazem.listarClientes();
        // Perguntar ao usuário qual cliente deseja excluir
        let indice = this.entrada.receberNumero('Digite o número do cliente que deseja excluir: ') - 1;
        // Buscar o cliente pelo índice
        let cliente = armazem.buscarClientePorIndice(indice);
        // Verificar se o cliente foi encontrado
        if (cliente) {
            // Remover o cliente do Armazem
            if (armazem.removerCliente(cliente)) {
                console.log('Cliente excluído com sucesso!');
            }
            else {
                console.log('Erro ao excluir o cliente.');
            }
        }
        else {
            console.log('Cliente não encontrado.');
        }
        console.log('Finalizando a exclusão do cliente...');
    }
}
exports.default = ExclusaoClienteTitular;

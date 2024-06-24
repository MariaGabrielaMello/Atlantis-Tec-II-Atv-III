"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ExcluirClienteDependente extends processo_1.default {
    processar() {
        console.clear();
        console.log('Processo de remoção de cliente principal iniciado...');
        const armazem = armazem_1.default.InstanciaUnica;
        // Etapa 1: Seleção de um cliente titular já está implementada no código existente
        // Etapa 2: Listar dependentes do titular selecionado
        const clienteEscolhido = armazem.Clientes.filter(cliente => cliente.Titular === undefined);
        const dependentes = armazem_1.default.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === clienteEscolhido[0]);
        if (dependentes.length === 0) {
            console.log('Este cliente principal não tem dependentes.');
            return;
        }
        console.log('Lista de Dependentes:');
        dependentes.forEach((dependente, indice) => {
            console.log(`${indice + 1}. ${dependente.Nome}`);
        });
        // Etapa 3: Permitir a escolha de um dependente específico ou a opção de remover todos
        console.log(`${dependentes.length + 1}. Remover todos os dependentes`);
        const escolhaDependente = this.entrada.receberNumero('Informe o número correspondente ao dependente que deseja remover, ou a opção para remover todos:');
        // Etapa 4: Executar a ação de remoção conforme a escolha do usuário
        if (escolhaDependente > dependentes.length) {
            // Remover todos os dependentes
            dependentes.forEach(dependente => armazem_1.default.InstanciaUnica.removerCliente(dependente));
            console.log('Todos os dependentes foram removidos com sucesso.');
        }
        else if (escolhaDependente >= 1 && escolhaDependente <= dependentes.length) {
            // Remover um dependente específico
            const dependenteEscolhido = dependentes[escolhaDependente - 1];
            armazem_1.default.InstanciaUnica.removerCliente(dependenteEscolhido);
            console.log('Dependente removido com sucesso.');
        }
        else {
            console.log('Número informado inválido.');
        }
    }
}
exports.default = ExcluirClienteDependente;

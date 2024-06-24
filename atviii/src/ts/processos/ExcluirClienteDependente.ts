import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirClienteDependente extends Processo {
    processar(): void {
        console.clear();
        console.log('Processo de remoção de cliente principal iniciado...');

        const armazem = Armazem.InstanciaUnica;
        // Etapa 1: Seleção de um cliente titular já está implementada no código existente

        // Etapa 2: Listar dependentes do titular selecionado
        const clienteEscolhido = armazem.Clientes.filter(cliente => cliente.Titular === undefined);

        const dependentes = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === clienteEscolhido[0]);

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
            dependentes.forEach(dependente => Armazem.InstanciaUnica.removerCliente(dependente));
            console.log('Todos os dependentes foram removidos com sucesso.');
        } else if (escolhaDependente >= 1 && escolhaDependente <= dependentes.length) {
            // Remover um dependente específico
            const dependenteEscolhido = dependentes[escolhaDependente - 1];
            Armazem.InstanciaUnica.removerCliente(dependenteEscolhido);
            console.log('Dependente removido com sucesso.');
        } else {
            console.log('Número informado inválido.');
        }
    }
}
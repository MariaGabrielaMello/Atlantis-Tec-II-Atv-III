import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExcluirClienteTitular extends Processo {
    processar(): void {
        console.clear();
        console.log('Processo de remoção de cliente principal iniciado...');

        const armazem = Armazem.InstanciaUnica;
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
            Armazem.InstanciaUnica.removerCliente(clienteEscolhido);
            console.log('Cliente principal removido com sucesso.');
        } else {
            console.log('Número informado inválido.');
        }
    }

    private obterClientePrincipalPorIndice(indice: number): Cliente | undefined {
        const clientesPrincipais = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        return clientesPrincipais[indice - 1];
    }
}

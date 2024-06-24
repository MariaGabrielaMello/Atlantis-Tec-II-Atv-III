import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica

        let cpf =  this.entrada.receberTexto('Qual cpf do cliente titular?')
        let clienteTitular = armazem.findByCpf(cpf)

        if( ! clienteTitular ) {
            console.log('Cliente titular não encontrado')
            return
        }

        console.log('Iniciando o cadastro de um novo cliente dependente...')
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let endereco = clienteTitular.Endereco.clonar()
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)
        cliente.Endereco = endereco
        cliente.Titular = clienteTitular
        clienteTitular.Dependentes.push(cliente)

        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()

        armazem.Clientes.push(cliente)

        console.log('Finalizando o cadastro do cliente dependente...')
    }
}
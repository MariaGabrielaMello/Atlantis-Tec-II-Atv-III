import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentesPorTitular extends Processo {
    private impressor!: Impressor
    constructor() {
        super()
    }
    processar(): void {
        console.clear()
        let armazem = Armazem.InstanciaUnica

        let cpf = this.entrada.receberTexto('Qual cpf do cliente?')
        let clienteTitular = armazem.findByCpf(cpf)

        if (!clienteTitular) {
            console.log('Cliente titular não encontrado')
            return
        }

        console.log('Iniciando a listagem dos clientes dependentes...')
        clienteTitular.Dependentes.forEach(cliente => {
            this.impressor = new ImpressaorCliente(cliente)
            console.log(this.impressor.imprimir())
        })
    }

}
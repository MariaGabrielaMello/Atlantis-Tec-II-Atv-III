import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";
import Processo from "../abstracoes/processo"; 

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        this.clientes.forEach(cliente => {
            if (this.dependente(cliente)) { 
                this.impressor = new ImpressaorCliente(cliente)
                console.log(this.impressor.imprimir())
            }
        })
    }
    private dependente(cliente: Cliente): boolean {
        
        return cliente.Titular !== undefined;
    }
}
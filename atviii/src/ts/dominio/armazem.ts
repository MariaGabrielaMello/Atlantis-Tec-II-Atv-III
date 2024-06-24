import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Acomodacao from "../modelos/acomodacao"
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";

export default class Armazem {
    findById(idCliente: number) {
        throw new Error("Method not implemented.");
    }
    excluirClienteTitular(cliente: never) {
        throw new Error("Method not implemented.");
    }
    findByCpf(cpf: string) {
        return this.clientes.find(cliente => cpf == cliente.Documentos
            .find(documento => documento.Tipo == TipoDocumento.CPF)?.Numero)
    }
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private hospedagens: Hospedagem[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public get Hospedagens(){ 
        return this.hospedagens
    }

    public removerCliente(clienteParaRemover: Cliente): void {
        this.clientes = this.clientes.filter(cliente => cliente !== clienteParaRemover);
    }



}
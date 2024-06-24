"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TipoDocumento_1 = require("../enumeracoes/TipoDocumento");
class Armazem {
    findById(idCliente) {
        throw new Error("Method not implemented.");
    }
    excluirClienteTitular(cliente) {
        throw new Error("Method not implemented.");
    }
    findByCpf(cpf) {
        return this.clientes.find(cliente => {
            var _a;
            return cpf == ((_a = cliente.Documentos
                .find(documento => documento.Tipo == TipoDocumento_1.TipoDocumento.CPF)) === null || _a === void 0 ? void 0 : _a.Numero);
        });
    }
    constructor() {
        this.clientes = [];
        this.acomodacoes = [];
        this.hospedagens = [];
    }
    static get InstanciaUnica() {
        return this.instanciaUnica;
    }
    get Clientes() {
        return this.clientes;
    }
    get Acomodacoes() {
        return this.acomodacoes;
    }
    get Hospedagens() {
        return this.hospedagens;
    }
    removerCliente(clienteParaRemover) {
        this.clientes = this.clientes.filter(cliente => cliente !== clienteParaRemover);
    }
}
Armazem.instanciaUnica = new Armazem();
exports.default = Armazem;

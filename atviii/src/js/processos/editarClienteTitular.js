"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class EditarClienteTitular extends processo_1.default {
    processar() {
        const armazem = armazem_1.default.InstanciaUnica;
        let cpf = this.entrada.receberTexto('Qual cpf do cliente?');
        let cliente = armazem.findByCpf(cpf);
        if (!cliente) {
            console.log('Cliente não encontrado');
            return;
        }
        console.log('Iniciando a edição do cliente ...');
        let nome = this.entrada.receberTexto('Qual o novo nome?');
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social?');
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento?');
        if (nome)
            cliente.Nome = nome;
        if (nomeSocial)
            cliente.NomeSocial = nomeSocial;
        if (dataNascimento)
            cliente.DataNascimento = dataNascimento;
        let rua = this.entrada.receberTexto('Qual a nova rua?');
        let bairro = this.entrada.receberTexto('Qual o novo bairro?');
        let cidade = this.entrada.receberTexto('Qual a nova cidade?');
        let estado = this.entrada.receberTexto('Qual o novo estado?');
        let pais = this.entrada.receberTexto('Qual o novo país?');
        let codigoPostal = this.entrada.receberTexto('Qual o novo código postal?');
        if (rua)
            cliente.Endereco.Rua = rua;
        if (bairro)
            cliente.Endereco.Bairro = bairro;
        if (cidade)
            cliente.Endereco.Cidade = cidade;
        if (estado)
            cliente.Endereco.Estado = estado;
        if (pais)
            cliente.Endereco.Pais = pais;
        if (codigoPostal)
            cliente.Endereco.CodigoPostal = codigoPostal;
        cliente.Documentos.forEach(documento => {
            console.log(documento);
            let numero = this.entrada.receberTexto('Qual o novo número?');
            if (numero)
                documento.Numero = numero;
        });
        console.log('Finalizando a edição do cliente...');
    }
}
exports.default = EditarClienteTitular;

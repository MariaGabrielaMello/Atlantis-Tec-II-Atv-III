"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class ListagemHospedagem extends processo_1.default {
    processar() {
        console.clear();
        console.log('Listando todas as hospedagens...');
        armazem_1.default.InstanciaUnica.Hospedagens.forEach(hospedagem => {
            console.log(`Cliente: ${hospedagem.Cliente.Nome}`);
            if (hospedagem.Cliente.Titular) {
                console.log(`Tipo: Dependente`);
                console.log(`Titular: ${hospedagem.Cliente.Titular.Nome}`);
            }
            else {
                console.log(`Tipo: Titular`);
                if (hospedagem.Cliente.Dependentes.length > 0) {
                    console.log(`Dependentes: ${hospedagem.Cliente.Dependentes.map(dependente => dependente.Nome).join(', ')}`);
                }
            }
            console.log(`Acomodação: ${hospedagem.Acomodacao.NomeAcomadacao}`);
            console.log(`Data do CheckIn: ${hospedagem.CheckIn.toLocaleDateString()}`);
            console.log(`Data do Checkout: ${hospedagem.CheckOut.toLocaleDateString()}`);
            console.log('----------------------');
        });
        this.finalizar();
    }
    finalizar() {
        console.log('Pressione qualquer tecla para continuar...');
    }
}
exports.default = ListagemHospedagem;

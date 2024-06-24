"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ExcluirHospedagem {
    constructor(armazem) {
        this.armazem = armazem;
    }
    excluir(nomeHospedagem) {
        // Certifique-se de que a propriedade Hospedagens existe e é um array.
        // Além disso, confirme que cada hospedagem tem uma propriedade 'acomodacao'.
        const index = this.armazem.Hospedagens.findIndex(hospedagem => hospedagem.acomodacao === nomeHospedagem);
        if (index === -1) {
            console.log("Hospedagem não encontrada.");
            return;
        }
        this.armazem.Hospedagens.splice(index, 1);
        console.log("Hospedagem excluída com sucesso.");
    }
}

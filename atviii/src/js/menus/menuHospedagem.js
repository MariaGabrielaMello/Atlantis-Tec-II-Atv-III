"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const armazem_1 = __importDefault(require("../dominio/armazem"));
class MenuNovaHospedagem {
    mostrar() {
        console.clear();
        console.log('Por favor, escolha uma acomodação:');
        armazem_1.default.InstanciaUnica.Acomodacoes.forEach((acomodacao, index) => {
            console.log(`${index + 1}: ${acomodacao.NomeAcomadacao}`);
        });
    }
}
exports.default = MenuNovaHospedagem;

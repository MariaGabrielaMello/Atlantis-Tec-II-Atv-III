"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const diretorSolteiroSimples_1 = __importDefault(require("../diretores/diretorSolteiroSimples"));
const diretorSolteiroMais_1 = __importDefault(require("../diretores/diretorSolteiroMais"));
const diretorCasalSimples_1 = __importDefault(require("../diretores/diretorCasalSimples"));
const diretorFamiliaSimples_1 = __importDefault(require("../diretores/diretorFamiliaSimples"));
const diretorFamiliaMais_1 = __importDefault(require("../diretores/diretorFamiliaMais"));
const diretorFamiliaSuper_1 = __importDefault(require("../diretores/diretorFamiliaSuper"));
const armazem_1 = __importDefault(require("../dominio/armazem"));
class CadastroAcomodacoes extends processo_1.default {
    constructor() {
        super();
        this.acomodacoes = armazem_1.default.InstanciaUnica.Acomodacoes;
    }
    processar() {
        let diretor = new diretorSolteiroSimples_1.default();
        this.acomodacoes.push(diretor.construir());
        let diretorSolteiroMais = new diretorSolteiroMais_1.default();
        this.acomodacoes.push(diretorSolteiroMais.construir());
        let diretorCasalSimples = new diretorCasalSimples_1.default();
        this.acomodacoes.push(diretorCasalSimples.construir());
        let diretorFamiliaSimples = new diretorFamiliaSimples_1.default();
        this.acomodacoes.push(diretorFamiliaSimples.construir());
        let diretorFamiliaMais = new diretorFamiliaMais_1.default();
        this.acomodacoes.push(diretorFamiliaMais.construir());
        let diretorFamiliaSuper = new diretorFamiliaSuper_1.default();
        this.acomodacoes.push(diretorFamiliaSuper.construir());
    }
}
exports.default = CadastroAcomodacoes;

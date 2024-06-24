"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuTipoExcluirCliente_1 = __importDefault(require("../menus/menuTipoExcluirCliente"));
const ExcluirCliente_1 = __importDefault(require("../processos/ExcluirCliente"));
const ExcluirClienteDependente_1 = __importDefault(require("./ExcluirClienteDependente"));
class TipoExclusaoCliente extends processo_1.default {
    constructor() {
        super();
        this.menu = new menuTipoExcluirCliente_1.default();
    }
    processar() {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirCliente_1.default();
                this.processo.processar();
                break;
            case 2:
                this.processo = new ExcluirClienteDependente_1.default();
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida :(');
                break;
        }
    }
}
exports.default = TipoExclusaoCliente;

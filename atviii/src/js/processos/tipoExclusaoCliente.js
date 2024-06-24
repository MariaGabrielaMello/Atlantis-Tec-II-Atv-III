"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const processo_1 = __importDefault(require("../abstracoes/processo"));
const menuTipoExclusaoCliente_1 = __importDefault(require("../menus/menuTipoExclusaoCliente"));
const exclusaoClienteTitular_1 = __importDefault(require("./exclusaoClienteTitular"));
class TipoExclusaoCliente extends processo_1.default {
    constructor() {
        super();
        this.menu = new menuTipoExclusaoCliente_1.default();
    }
    processar() {
        this.menu.mostrar();
        this.opcao = this.entrada.receberNumero('Qual opção desejada?');
        switch (this.opcao) {
            case 1:
                this.processo = new exclusaoClienteTitular_1.default();
                this.processo.processar();
                break;
            default:
                console.log('Opção não entendida :(');
        }
    }
}
exports.default = TipoExclusaoCliente;

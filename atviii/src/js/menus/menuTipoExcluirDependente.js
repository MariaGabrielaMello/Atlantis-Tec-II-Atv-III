"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MenuTipoExclusaoCliente {
    mostrar() {
        console.clear();
        console.log(`****************************`);
        console.log(`| Qual o tipo do cliente para exclusão? `);
        console.log(`----------------------`);
        console.log(`| 1 - Titular`);
        console.log(`| 2 - Dependente`);
        console.log(`----------------------`);
    }
}
exports.default = MenuTipoExclusaoCliente;

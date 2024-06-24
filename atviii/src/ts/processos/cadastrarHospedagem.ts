import Processo from "../abstracoes/processo";
import MenuHospedagem from "../menus/menuHospedagem";
import Cliente from "../modelos/cliente";
import Acomadacao from "../modelos/acomodacao";
import Armazem from "../dominio/armazem";
import Hospedagem from "../modelos/hospedagem";

export default class CadastroHospedagem extends Processo {
    private cliente: Cliente;

    constructor() {
        super();
        Armazem.InstanciaUnica.Clientes.forEach((cliente, index) => {
            console.log(`${index + 1}: ${cliente.Nome}`);
        });
        let indexCliente = this.entrada.receberNumero('Selecione um Cliente para definir a acomodação') - 1;
        this.cliente = Armazem.InstanciaUnica.Clientes[indexCliente];
        this.menu = new MenuHospedagem();
    }

    processar(): void {
        this.menu.mostrar();
        let index = this.entrada.receberNumero('Qual a opção desejada?') - 1;
        let acomodacao = Armazem.InstanciaUnica.Acomodacoes[index];

        let checkIn = this.entrada.receberData('Qual a data de  CheckIn?');

        let checkOut = this.entrada.receberData('Qual a data de Checkout?');

        let hospedagem = new Hospedagem(this.cliente, acomodacao, checkIn, checkOut);

        Armazem.InstanciaUnica.Hospedagens.push(hospedagem);
    }
}
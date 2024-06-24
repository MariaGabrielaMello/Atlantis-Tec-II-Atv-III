import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";


export default class ListagemHospedagem extends Processo {
    processar(): void {
        console.clear();
        console.log('Listando todas as hospedagens...');

        Armazem.InstanciaUnica.Hospedagens.forEach(hospedagem => {
            console.log(`Cliente: ${hospedagem.Cliente.Nome}`);
            if (hospedagem.Cliente.Titular) {
                console.log(`Tipo: Dependente`);
                console.log(`Titular: ${hospedagem.Cliente.Titular.Nome}`);
            } else {
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

    private finalizar(): void {
        console.log('Pressione qualquer tecla para continuar...');
}
}
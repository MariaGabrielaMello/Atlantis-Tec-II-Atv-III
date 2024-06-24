import Processo from "../abstracoes/processo";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor = new DiretorSolteiroSimples()
        this.acomodacoes.push(diretor.construir())
        let diretorSolteiroMais = new DiretorSolteiroMais()
        this.acomodacoes.push(diretorSolteiroMais.construir())
        let diretorCasalSimples = new DiretorCasalSimples()
        this.acomodacoes.push(diretorCasalSimples.construir())
        let diretorFamiliaSimples = new DiretorFamiliaSimples()
        this.acomodacoes.push(diretorFamiliaSimples.construir())
        let diretorFamiliaMais = new DiretorFamiliaMais()
        this.acomodacoes.push(diretorFamiliaMais.construir())
        let diretorFamiliaSuper = new DiretorFamiliaSuper()
        this.acomodacoes.push(diretorFamiliaSuper.construir())       
    }
}
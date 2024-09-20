import './atleta.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Atleta = ({ atleta, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(atleta.id);
    }
    return (<div className="atleta">
        <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(atleta.id)} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={atleta.imagem} alt={atleta.nome} />
        </div>
        <div className="rodape">
            <h4>{atleta.nome}</h4>
            <h5>{atleta.funcao}</h5>
            <div className='favorito'>
                {atleta.favorito ? <AiFillHeart color="#ff0000" size={25} onClick={favoritar} /> : <AiOutlineHeart size={25} onClick={favoritar} />}
            </div>
        </div>
    </div>)
}

export default Atleta
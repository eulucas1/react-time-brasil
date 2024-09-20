import Atleta from '../Atleta'
import hexToRgba from 'hex-to-rgba';
import './esporte.css'

const Esporte = ({ esporte, atletas, aoDeletar, mudarCor, aoFavoritar }) => {
    return (

        atletas.length > 0 && <section className='esporte' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(esporte.cor, '0.6') }}>
            <input type='color' className='input-cor' value={esporte.cor} onChange={evento => {
                mudarCor(evento.target.value, esporte.id);
            }} />
            <h3 style={{ borderColor: esporte.cor }}>{esporte.nome}</h3>
            <div className='atletas'>
                {atletas.map((atleta, indice) => <Atleta key={indice} atleta={atleta} corDeFundo={esporte.cor} aoDeletar={aoDeletar} aoFavoritar={aoFavoritar} />)}
            </div>
        </section>

    )
}

export default Esporte
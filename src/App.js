import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Esporte from "./componentes/Esporte";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [esportes, setEsportes] = useState([
    {
      id: uuidv4(),
      nome: 'Natação',
      cor: '#4379F2'
    },
    {
      id: uuidv4(),
      nome: 'Futebol',
      cor: '#FFEB00'
    },
    {
      id: uuidv4(),
      nome: 'Vôlei',
      cor: '#6EC207'
    },
    {
      id: uuidv4(),
      nome: 'Ginástica',
      cor: '#D2E0FB'
    },
  ]);

  const inicial = [
    // Natação
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gabriel Santos',
      funcao: 'Nadador',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMGvE6WrJFvI3MyKOch9VPfA0Q86KJ7RUF-A&s',
      esporte: esportes[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fernando Scheffer',
      funcao: 'Nadador',
      imagem: 'https://parlante.com.br/palestrantes/wp-content/uploads/2017/06/fernando-scherer-contato-contratar-palestra-742x1024.jpg',
      esporte: esportes[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'César Cielo',
      funcao: 'Nadador',
      imagem: 'https://terceirotempo.uol.com.br/imagens/59/88/w500_h140_qfl_fto_15988.webp',
      esporte: esportes[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Etiene Medeiros',
      funcao: 'Nadadora',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyLtY2dtGZzUHmytKD0Uwh77N1ex9al05ue5eM2f0f4ZSIuES5',
      esporte: esportes[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Viviane Jungblut',
      funcao: 'Nadadora',
      imagem: 'https://www.rbsdirect.com.br/filestore/9/3/7/6/4/8/4_841753c7fb3ff8b/4846739_94bfe688f3e6482.jpg?w=700',
      esporte: esportes[0].nome,
    },
    // Futebol
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Neymar',
      funcao: 'Jogador de Futebol',
      imagem: 'https://i.pinimg.com/736x/49/19/a8/4919a8dc44184ea27159ad8e1e6dde41.jpg',
      esporte: esportes[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Marta Silva',
      funcao: 'Jogadora de Futebol',
      imagem: 'https://blog.futfanatics.com.br/wp-content/uploads/2021/06/Marta-Destaque.png',
      esporte: esportes[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Debinha',
      funcao: 'Jogadora de Futebol',
      imagem: 'https://f.i.uol.com.br/fotografia/2022/07/17/165807309062d430026902a_1658073090_3x2_xl.jpg',
      esporte: esportes[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Alisson Becker',
      funcao: 'Jogador de Futebol',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_850_1625.jpg/250px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_850_1625.jpg',
      esporte: esportes[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Richarlison',
      funcao: 'Jogador de Futebol',
      imagem: 'https://f.i.uol.com.br/fotografia/2022/11/24/1669331710637ffafe402ca_1669331710_3x2_rt.jpg',
      esporte: esportes[1].nome,
    },
    // Vôlei
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Bruno Rezende',
      funcao: 'Jogador de Vôlei',
      imagem: 'https://noticiasdatv.uol.com.br/media/uploads/artigos_2023/bruno-rezende-volei-foto-instagram-instagram.jpg',
      esporte: esportes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Thaisa Menezes',
      funcao: 'Jogadora de Vôlei',
      imagem: 'https://uploads.metroimg.com/wp-content/uploads/2024/07/29155508/Thaisa-Daher-em-Paris.jpg',
      esporte: esportes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Wallace',
      funcao: 'Jogador de Vôlei',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvfJkBzUvPGdtPhxNx8zO4hzzNFx40RA9Qg&s',
      esporte: esportes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fernanda Garay',
      funcao: 'Jogadora de Vôlei',
      imagem: 'https://www.olimpiadatododia.com.br/wp-content/uploads/2020/05/Fernanda-Garay-FIVB2.jpg',
      esporte: esportes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Ana Patrícia Silva',
      funcao: 'Jogadora de Vôlei de Praia',
      imagem: 'https://s2-ge.glbimg.com/DmVzh7w7hXMW_Ej1LmJ8RlviBUs=/0x0:1449x966/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/M/N/wR8PQDTpSOOyAe4Zi3lw/voleidepraia2.jpg',
      esporte: esportes[2].nome
    },
    
    // Ginástica
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Rebeca Andrade',
      funcao: 'Ginasta',
      imagem: 'https://cdn.oantagonista.com/uploads/2024/08/Quem-e-Rebeca-Andrade-Conheca-a-historia-dessa-lenda-scaled.jpeg',
      esporte: esportes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Arthur Zanetti',
      funcao: 'Ginasta',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1lsxpgqBMQ366igywvgBbfB32NdG13ukgcQ&s',
      esporte: esportes[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Flávia Saraiva',
      funcao: 'Ginasta',
      imagem: 'https://s2-oglobo.glbimg.com/4a4BjBi6Bq3N-uFQyKaFhJevlq4=/0x0:1000x600/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2024/A/1/zchBE4SAuTlQ2lgdVsaA/whatsapp-image-2024-07-31-at-12.05.49.jpeg',
      esporte: esportes[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Diego Hypoólito',
      funcao: 'Ginasta',
      imagem: 'https://multipalestras.com/wp-content/uploads/2022/07/4270680264-diego-hypolito-ginasta-brasileiro-posa-com-o-bronze-conquistado-no-mundial.jpg',
      esporte: esportes[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Jade Barbosa',
      funcao: 'Ginasta',
      imagem: 'https://s2-ge.glbimg.com/USdaBDw-nnozCwnXol_tsFkL4Lo=/0x0:3510x2280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/n/u/sbyQGERJulhqMfNtDnJw/2024-07-28t203524z-1136746694-up1ek7s1l6yxy-rtrmadp-3-olympics-2024-artisticgymnastics.jpg',
      esporte: esportes[3].nome,
    },
  ];


  const [atletas, setAtletas] = useState(inicial)

  function deletarAtleta(id) {
    setAtletas(atletas.filter(atleta => atleta.id !== id));
  }

  function mudarCor(cor, id) {
    setEsportes(esportes.map(esporte => {
      if (esporte.id === id) {
        esporte.cor = cor;
      }
      return esporte;
    }));
  }

  function cadastrarEsporte({ nome, cor }) {
    setEsportes([...esportes, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setAtletas(atletas.map(atleta => {
      if (atleta.id === id) atleta.favorito = !atleta.favorito;
      return atleta;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarEsporte={cadastrarEsporte} esportes={esportes.map(esporte => esporte.nome)} aoCadastrar={atleta => setAtletas([...atletas, atleta])} />
      <section className="esportes">
        <h1>Comitê Olímpico Brasileiro</h1>
        {esportes.map((esporte, indice) => <Esporte mudarCor={mudarCor} key={indice} esporte={esporte} atletas={atletas.filter(atleta => atleta.esporte === esporte.nome)} aoDeletar={deletarAtleta} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;



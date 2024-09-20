import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({ aoCadastrar, esportes, aoCriarEsporte }) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [esporte, setEsporte] = useState('')
    const [nomeEsporte, setNomeEsporte] = useState('')
    const [corEsporte, setCorEsporte] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, funcao, imagem, esporte)
        aoCadastrar({
            nome,
            funcao,
            imagem,
            esporte
        })

        // Limpa os campos do formulário de atleta
        setNome('')
        setFuncao('')
        setImagem('')
        setEsporte('')
    }

    const aoSubmeterEsporte = (evento) => {
        evento.preventDefault()
        aoCriarEsporte({ nome: nomeEsporte, cor: corEsporte })

        // Limpa os campos do formulário de esporte
        setNomeEsporte('')
        setCorEsporte('')
    }

    return (
        <section className="formulario-container">
            {/* Formulário de criação de card de atleta */}
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha para criar o card do Atleta.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label='Função'
                    placeholder='Digite sua função'
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <Campo
                    label='Imagem'
                    placeholder='Informe o endereço da imagem'
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label='Esportes'
                    items={esportes}
                    valor={esporte}
                    aoAlterado={valor => setEsporte(valor)}
                />
                <Botao texto='Criar card' />
            </form>

            {/* Formulário de criação de novo esporte */}
            <form className="formulario" onSubmit={aoSubmeterEsporte}>
                <h2>Preencha para criar um novo esporte.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do esporte'
                    valor={nomeEsporte}
                    aoAlterado={valor => setNomeEsporte(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label='Cor'
                    type='color'
                    placeholder='Digite sua cor'
                    valor={corEsporte}
                    aoAlterado={valor => setCorEsporte(valor)}
                />
                <Botao texto='Criar Esporte' />
            </form>
        </section>
    )
}

export default Formulario

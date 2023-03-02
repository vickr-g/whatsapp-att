'use strict'

import { contatos } from "./contato.js"

const criarCard = (contato) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    const fotoPessoa = document.createElement('img')
    fotoPessoa.classList.add('img-chat')
    fotoPessoa.src = `./img/contact1.png`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const perfil = document.createElement('div')
    perfil.classList.add('container-perfil')

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const mensagemMe = document.createElement('span')
    mensagemMe.classList.add

    const hora = document.createElement('div')
    hora.classList.add('hora')
    hora.textContent = contato.hora

    conversa.append(fotoPessoa, informacao, nome)

    informacao.append(perfil)

    perfil.append(nome, descricao)

    return conversa

}
const carregarContatos = () => {
    const container = document.getElementById('container')
    const contatosMensagens = contatos.map(criarCard)

    container.replaceChildren(...contatosMensagens)
}


carregarContatos()

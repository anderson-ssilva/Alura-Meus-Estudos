const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach((elemento) => {
    criaElemento(elemento)
})

form.addEventListener('submit', (evento)=> {
    
    evento.preventDefault()  //Interrompendo o comportamento padrão do elemento (Envio dos dados para a própria página)

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find(elemento => elemento.nome === nome.value)
    
    const itemAtual = {
            "nome": nome.value,
            "quantidade": quantidade.value
        }

    if (existe) {
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual

    }else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1 : 0;
        criaElemento(itemAtual)
    
        itens.push(itemAtual)
    }   

    localStorage.setItem("itens", JSON.stringify(itens))      // O localStrage permite apenas o armazenamento de strings. Para isso utiliza-se o método .stringfy() no JSON

    nome.value = ""
    quantidade.value = ""

})

//<li class="item"><strong>7</strong>Camisas</li>

function criaElemento (item) {

    const novoItem = document.createElement('li')              // Criando o elemento "li"
    novoItem.classList.add('item')                             // Adicionando ao elemento criado uma classe
 
    const quantidadeItem = document.createElement('strong')    // Criando o elemento "strong"
    quantidadeItem.innerHTML = item.quantidade                      // Adicionando ao elemento o conteudo do input "quantidade"
    quantidadeItem.dataset.id = item.id

    novoItem.appendChild(quantidadeItem)                       // Englobando ao elemento "li" o elemento "strong" bem como seu conteudo
    novoItem.innerHTML += item.nome                                 // Incrementando o elemento "li" com o conteúdo do imput "nome"

    novoItem.appendChild(botaoDeleta(item.id))
    
    lista.appendChild(novoItem)                                // Englobancdo ao elemento "ul" o elemento "li" e seus filhos 
}

function atualizaElemento (item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}

function botaoDeleta (id) {
    const elementoBotao = document.createElement('button')
    elementoBotao.innerText = 'X'

    elementoBotao.addEventListener('click', function () {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento (tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem('itens', JSON.stringify(itens))
}
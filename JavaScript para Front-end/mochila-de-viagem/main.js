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
    }else {
        itemAtual.id = itens.length
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
    
    lista.appendChild(novoItem)                                // Englobancdo ao elemento "ul" o elemento "li" e seus filhos 
}

function atualizaElemento (item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantidade
}

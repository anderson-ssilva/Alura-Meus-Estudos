let ListaDeLivros = []
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscaaLivrosDaAPI ()

async function getBuscaaLivrosDaAPI () {    //
    const res = await fetch(endPoint)       //
    ListaDeLivros = await res.json()        // Função para buscar lista de livros na API
    console.table(ListaDeLivros)

    exibirOsLivrosNatela(ListaDeLivros) // Chamando a função criada para inserir os livros na tela
}

const elementosParainseririrLivros = document.getElementById('livros') // Elemento (section id ="livros") do DOM no qual vamos inserir a lista de livros

function exibirOsLivrosNatela (ListaDeLivros) {
    ListaDeLivros.forEach(livro => {  // Iterando sobre a lista de livros para inserir livro a livro nas section id ="livror" livro a livro
        elementosParainseririrLivros.innerHTML += 

        `
        <div class="livro">
        <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">${livro.titulo}</h2>
        <p class="livro__descricao">${livro.imagem}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>

        `
    });
}
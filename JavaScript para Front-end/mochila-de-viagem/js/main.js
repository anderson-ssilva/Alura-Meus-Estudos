const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); // interrompe o comportamento de envio das informações de envio dos dados do formuláio

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value );
})

//<li class="item"><strong>7</strong>Camisas</li>
function criaElemento (nome, quantidade) {
    const novoItem = document.createElement('li'); //Criando um novo elemento HTML (list Item)
    novoItem.classList.add('item');                 //Adicionando uma nova classe ao item criado

    const numeroItem = document.createElement('strong'); //Criando um novo elemento HTML (strong)
    numeroItem.innerHTML = quantidade;                   // Adicionando ao elemento HTML criado um conteudo

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
}
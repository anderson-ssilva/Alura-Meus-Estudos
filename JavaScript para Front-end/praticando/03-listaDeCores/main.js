// Minha Solução

// function mostraTintas () {
//     const lista = document.querySelectorAll('.item');

//     for (let index = 0; index < lista.length; index++) {
//         lista[index].childNodes[0].data = `Tinta ${lista[index].attributes[0].nodeValue}`;
//     }
// }

// function limparTintas () {
//     const lista = document.querySelectorAll('.item');

//     for (let index = 0; index < lista.length; index++) {
//         lista[index].childNodes[0].data = "";
//     }
// }


//gabarito

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()   
    }
    else {
        console.log('Elemento não encontado ou seletor inválido')
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla'); //Referencia criada para armazenar uma lista

/*
Estrutura de repetição ("enquanto")

let contador = 0; //contador add para contar o numero de repetições do laço

while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string : recurso para montar textos dinamicamente
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    } // funcção anonima para não cair na politica do navegador de executar sons no momento em que a página é carregada

    contador += 1
}
 */

for (let contador = 0; contador < ListaDeTeclas.length; contador ++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if (evento.code === 'Space' || evento.code === 'Enter') {
            ListaDeTeclas[contador].classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        ListaDeTeclas[contador].classList.remove('ativa');
    }
}

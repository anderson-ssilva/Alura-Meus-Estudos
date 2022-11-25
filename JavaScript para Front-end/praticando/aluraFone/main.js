const listaDeTeclas = document.querySelectorAll('input[type=button]');

const campoDigitavel = document.querySelector('input[type=tel]');


for(contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]

    listaDeTeclas[contador].onclick = function () {
        campoDigitavel.value += tecla.defaultValue;
    }

    listaDeTeclas[contador].onkeyup = function () {
        tecla.classList.add('ativa');
    }

    listaDeTeclas[contador].onkeydown = function () {
        tecla.classList.remove('ativa');
    }
}

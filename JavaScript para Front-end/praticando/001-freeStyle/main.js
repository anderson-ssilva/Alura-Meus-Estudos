const visor = document.querySelector('.visor');

const teclas = document.querySelectorAll('#tecla');

teclas.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) =>{
        console.log(evento.target.value);
    })
})

function somar (a, b) {
    return a + b
}

function subtrair (a, b) {
    return a - b
}
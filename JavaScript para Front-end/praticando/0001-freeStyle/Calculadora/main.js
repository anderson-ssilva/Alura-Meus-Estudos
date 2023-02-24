const teclas = document.querySelectorAll('input[type=button]')

teclas.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        console.log(evento.target.value)
    })
})

function soma(a, b) {
    return a + b
}
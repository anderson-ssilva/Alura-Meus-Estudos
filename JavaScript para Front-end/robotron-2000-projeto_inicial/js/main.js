const somar = document.querySelector('#somar');

const subtrair = document.querySelector('#subtrair');

const braco = document.querySelector('#braco');

somar.addEventListener('click', () => {
    braco.value = parseInt(braco.value) + 1;
})

subtrair.addEventListener('click', () => {
    braco.value = parseInt(braco.value) - 1;
})

function mostraTintas() {
    const itens = document.querySelectorAll('.item');

    itens.forEach( (elemento) => {
        if (elemento.hidden === false){
            elemento.hidden = true;
        }else {
            elemento.hidden = false;
        }
    });
}

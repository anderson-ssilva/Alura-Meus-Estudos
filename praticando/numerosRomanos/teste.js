function solution (roman) {
    const listaRomanos = ['I', 'V', 'X', 'L', 'C', 'D', 'M'] 
    const listaInteiros = [1, 5, 10, 50, 100, 500, 1000]
    const listaInteirosNegativos = [-1, 5, 10, 50, 100, 500, 1000]
    const romanSplit = roman.split('')
    const teste = romanSplit[0] < romanSplit[1]
    var resultado = 0

    if(teste) {
        romanSplit.forEach( (element) => {
            resultado += listaInteirosNegativos[listaRomanos.indexOf(element)]
          });
    } else {
        romanSplit.forEach( (element) => {
      resultado += listaInteiros[listaRomanos.indexOf(element)]
    });
    } 
    
    return console.log(resultado)
  }

  solution('XLIX')
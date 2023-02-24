function accum(s) {
    var lista = []
	for (let index = 0; index < s.length; index++) {

        lista.push(s[index].repeat(index+1))
    }
    console.log(lista.join('-'))
    
}

accum('abcd')



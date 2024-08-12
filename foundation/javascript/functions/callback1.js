// callback é uma função que será chamada quando algum evento acontecer
// no exemplo do forEach, quando ele ver o elemento, ele executa o callback
// neste caso, o callback do forEach recebe três argumentos
// neste caso estamos usando o valor do elemento e também seu indice

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
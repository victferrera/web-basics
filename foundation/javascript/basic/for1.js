// let contador = 1

// while(contador <= 10){
//     console.log(`Valor atual do contador: ${contador}`)
//     contador++
// }

// for já é uma estrutura de repetição que tem a iteração determinada
// ja o while/do while é uma estrutura de repetição indefinida
// quando não se sabe de antemão quantos dados serão iterados

for(let i = 1; i <= 10; i++){
    console.log(`Valor atual da variável i: ${i}`)
}

// iteração em um array

const notas = [10, 10.1, 15.3, 7.7]

for(let x = 0; x < notas.length; x++){
    console.log(notas[x])
}

// o in retorna o index do array, não o valor em si
// existem outras formas mais eficazes de acessar array, como forEach e o map
// for (i in notas){
//     console.log(`Iteração usando IN: ${notas[i]}`)
// }

// foreach também é uma estrutura de repetição conhecida para
// iterar sobre coleções
// o forEach recebe uma função que tem 1 argumento
// esse argumento seria o valor lido do array
// o forEach le cada valor do array e passa como parametro para a funcao

// notas.forEach(mostrarNota);

// function mostrarNota(nota){
//     console.log(`Nota: ${nota}`)
// }
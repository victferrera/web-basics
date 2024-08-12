const notas = [7.7, 6.5, 7.2, 7.0, 5.0, 5.5, 8.9, 10]

// lendo array sem callback

let notasBaixas = []
for (i in notas) {
    if(notas[i] < 7) notasBaixas.push(notas[i])
}

console.log(notasBaixas)

// lendo array com callback
notasBaixas = notasBaixas.filter(value => value < 7)
console.log(notasBaixas)
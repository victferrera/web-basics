// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.

// etapas
// 1 - criar a função
// 2 - a função recebe três argumentos: ax2, bx e c
// 3 - para ax2 = 3, bx = -5, c = 12
// 4 - formula de bhaskara para char o valor de X: x = -b +- b2-4ac / 2a

function bhaskara(ax2, bx, c) {
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)

    if (delta < 0) return `Delta é negativo`

    let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
    let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)

    return [x1, x2]
}

// Tests

let resultado = bhaskara(3, -5, 12)
console.log(resultado) // delta negativo

resultado = bhaskara(2, -4, -6)
console.log(`Possíveis resultados de x: ${resultado[0]}, ${resultado[1]}`) // dois possíveis resultados
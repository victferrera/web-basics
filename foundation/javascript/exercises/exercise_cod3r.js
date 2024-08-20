// 2) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

// Equilátero - três lados iguais
// Isósceles - Dois lados iguais
// Escaleno - todos os lados são diferentes

// passos
// 1 - criar a função
// 2 - a função deve receber o comprimento dos 3 lados
// 4 - classificar o triângulo
// 5 - retornar a classificação do triângulo

function classifyTriangle(s1, s2, s3) {

    if (typeof(s1) !== 'number' || s1 <= 0 || typeof(s2) !== 'number' || s2 <= 0 || typeof(s3) !== 'number' || s3 <= 0) return 'Parâmetros inválidos'

    if (s1 === s2 && s2 === s3) {
        return 'Equilátero'
    }
    else if (s1 === s2 || s1 === s3 || s2 === s3) {
        return 'Isósceles'
    }
    else {
        return 'Escaleno'
    }
}

console.log(classifyTriangle(1, 1, 1))
console.log(classifyTriangle(1.5, 8, 1.5))
console.log(classifyTriangle(1.8, 2.2, 1.9))
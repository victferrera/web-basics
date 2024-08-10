// Atividade: Destructuring em JavaScript

// Objetivo: Praticar a técnica de destructuring em JavaScript para extrair valores de arrays e objetos de forma mais eficiente e legível.

// Descrição da Atividade:

//     Destructuring de Arrays:

//         Crie uma variável frutas que é um array contendo os seguintes elementos: "maçã", "banana", "laranja", "uva", "melancia".

//         Utilize destructuring para extrair os seguintes valores do array:
//             O primeiro elemento ("maçã")
//             O segundo elemento ("banana")
//             Os dois últimos elementos ("uva" e "melancia")

//         Armazene cada valor extraído em variáveis apropriadas e imprima-as no console.

let frutas = ['maçã', 'banana', 'laranja', 'uva', 'melancia']

const [primeiraFruta,,,,] = frutas
console.log(`Primeira fruta: ${primeiraFruta}`)

const [,segundaFruta,,,] = frutas
console.log(`Segunda fruta: ${segundaFruta}`)

const [,,,penultimaFruta, ultimaFruta] = frutas
console.log(`Penultima e ultima fruta: ${penultimaFruta}, ${ultimaFruta}`)

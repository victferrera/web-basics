// Destructuring de Objetos:

//     Crie uma variável pessoa que é um objeto com as seguintes propriedades:

//     javascript

// {
//   nome: "João",
//   idade: 30,
//   endereco: {
//     rua: "Rua das Flores",
//     numero: 123
//   },
//   telefone: "1234-5678"
// }

// Utilize destructuring para extrair as seguintes propriedades do objeto:

//     nome
//     idade
//     endereco (como um objeto)
//     telefone

// Extraia também a propriedade rua do objeto endereco e armazene em uma variável separada.

// Armazene cada valor extraído em variáveis apropriadas e imprima-as no console.

const pessoa = {
    nome: 'João',
    idade: 30,
    endereco: {
        rua: 'Rua das Flores',
        numero: 123
    },
    telefone: '1234-5678'
}

const {nome, idade, endereco: {rua, numero}, telefone} = pessoa

console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Endereço: ${rua}, ${numero}`)
console.log(`Telefone: ${telefone}`)
const nome = 'Vitor'
const concatenacao = 'Olá ' + nome + '!'

// template string suporte a interpolação de string e também quebra de linha
const template = `Olá ${nome}!`

console.log(concatenacao);
console.log(template);

// tbm suporte expressoes

console.log(`1 + 1 = ${1 + 1}`);

// basicamente você pode executar codigo javascript dentro de string que no final tudo vai ser convertido para string

//executando uma arrow function dentro do template string

const up = texto => texto.toUpperCase(); //funcao arrow

console.log(`${up('cuidado')}`);

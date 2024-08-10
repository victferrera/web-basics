const obj1 = {}
obj1.nome = 'Vitor'
obj1.idade = 27
obj1.endereco = {logradouro: 'abc'}

const {nome, idade} = obj1; //tira do objeto os atributos nome e idade

const { nome: n, idade: i } = obj1; //tira do objeto e atribui nome

console.log(nome, idade)
console.log(n, i)
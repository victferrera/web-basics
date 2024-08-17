// endereço de memória -> 123 -> {...}

const pessoa = {nome: 'João'}

// aqui não mexo no endereço de pessoa
pessoa.nome = 'Pedro'

console.log(pessoa)

// aqui o endereço é modificado
// atribuição para constantes funciona só uma vez
// pessoa = {nome: 'Ana'}

// aqui congelamos o objeto, ele já não pode ser modificado
Object.freeze(pessoa)

pessoa.nome = 'Maria'
// com o objeto congelado, nada é alterado
console.log(pessoa.nome)
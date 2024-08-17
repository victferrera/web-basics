const pessoa = {
    nome: 'Rebecca',
    idade: '2',
    peso: 13
}

// traz todas as chaves do objeto pessoa
console.log(Object.keys(pessoa))

// traz todos os valores do objeto pessoa
console.log(Object.values(pessoa))

// traz os valores e as chaves do objeto pessoa
console.log(Object.entries(pessoa))

// adiciona um atributo ao objeto, porém da pra usar e definir algumas caracteristicas dessa propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// adiciona propriedades de outros objetos ao objeto de destino e cria um novo objeto com todas as propriedades
const dest = { nome: 'André' }
const o1 = { idade: 15 }
const o2 = { endereço: { rua: 'Rua ABC' } }
const obj1 = Object.assign(dest, o1, o2)

console.log(obj1)
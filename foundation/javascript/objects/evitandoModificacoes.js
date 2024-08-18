// Object.preventExtensions
// previne extensão do objeto, não pode adicionar novo atributo, mas pode alterar e deletar

const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha de apagar'
delete produto.preco

console.log(produto)

// Object.seal
// sela o objeto pra modificação, não da pra adicionar e nem excluir, mas da pra alterar o valor das props

const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)

delete pessoa.nome
pessoa.endereco = 'Rua ABC'

console.log(pessoa)
console.log(Object.isSealed(pessoa))

// Object.freeze
// não da pra fazer nada, nem modificar valores de atributos, nem deletar, nem adicionar
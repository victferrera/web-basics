function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.15,
    getPreco
}

console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 19000, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// a diferença do call e do apply é que o call permite passar o contexto e também os parâmetros da função
console.log(getPreco.call(carro, 0.5, 'U$'))

// já o apply necessita ter um array
console.log(getPreco.apply(carro, [0.1, 'EU$']))
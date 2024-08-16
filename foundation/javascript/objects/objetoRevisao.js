// coleção dinâmica de chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérico'
produto.preco = 100

console.log(produto)

delete produto.preco
delete produto['marca do produto']

console.log(produto)

const carro = {
    marca: 'Chevrolet',
    valor: 79000,
    proprietario: {
        nome: 'Vitor',
        endereco: {
            rua: 'ABC',
            numero: 123,
            bairro: 'Flores'
        }
    },
    condutores: [
        {
            nome: 'João',
            idade: 19
        },
        {
            nome: 'Felipe',
            idade: '25'
        },
        {
            nome: 'André',
            idade: 31
        }
    ],
    calcularValorSeguro: () => 'Calcular valor seguro'
}

carro.proprietario.endereco.numero = 256
carro['proprietario']['endereco']['rua'] = 'Rua 7'

console.log(carro)
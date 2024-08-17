// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object no JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// funções construtoras
// o this permite alterar (ver) o valor fora da função
function Produto(nome, preco, desc) {
    this.nome = nome,
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const prod1 = new Produto('computador', 1500, 0.15)
const prod2 = new Produto('notebook', 3000, 0.2)

console.log(prod1.getPrecoComDesconto())

prod2.nome = 'macbook'

console.log(prod2)

// função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
             return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7800, 5)
console.log(f1.getSalario())

// Object create
const filha = Object.create(null)
filha.nome = 'Isabela'
filha.idade = 15

console.log(filha)

// função JSON parse

const fromJSON = JSON.parse('{"info": "eu sou um json"}')

console.log(fromJSON)
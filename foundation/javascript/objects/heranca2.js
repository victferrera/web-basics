// cadeia de protótipos
Object.prototype.attr0 = 'Atributo 0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(avo.attr1)
console.log(pai.attr1, pai.attr2)
console.log(filho.attr1, filho.attr3)
console.log(filho.attr0)

const carro = {
    veloAtual: 0,
    veloMax: 200,
    acelerarMais(delta) {
        if (this.veloAtual + delta <= this.veloMax) {
            this.veloAtual += delta
        } else {
            this.veloAtual = this.veloMax
        }
    },
    status() {
        return `${this.veloAtual}Km/h de ${this.veloMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    veloMax: 324,
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// função que seta o prototype do objeto target para o objeto source

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.__proto__)

console.log(volvo.acelerarMais(100))
console.log(volvo.status())

console.log(ferrari.acelerarMais(325))
console.log(ferrari.status())
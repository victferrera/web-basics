const pai = {nome: 'João', corCabelo: 'Preto'}

const filha = Object.create(pai)

console.log(filha)
filha.nome = 'Amanda'
filha.corCabelo = 'Loiro'

console.log(filha)

const filha2 = Object.create(pai, {
    nome: {
        enumerable: true,
        writable: false,
        value: 'Beatriz'
    }
})

console.log(filha2)

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}


// object não é a mesma coisa que json
// object é coleção chave valor simplificando

const prod1 = {}
prod1.nome = 'Celular'
prod1.preco = 3999.90
prod1['Desconto Legal'] = 40 //evitar atributos com espaço

console.log(prod1);


const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        valor: 100
    }
}

//json é um formato textual
console.log(JSON.stringify(prod2));

console.log(prod2)
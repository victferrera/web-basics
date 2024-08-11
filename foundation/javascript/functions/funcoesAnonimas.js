// função anônima é uma função sem nome simplismente

const soma = function (x, y) {
    return x + y
}

const subtracao = function (x, y) {
    return x - y
}

// aqui a operação pode receber uma função como argumento
// assume o valor padrão soma caso nada for fornecido
const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(5, 5)
imprimirResultado(10, 5, subtracao)
imprimirResultado(5, 5, function(x, y) { return x * y})

const pessoa = {
    falar: function () {
        console.log('Olá')
    }
}

pessoa.falar()
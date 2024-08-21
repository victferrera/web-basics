// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

// etapas
// 1 - criar duas funções, uma para juros simples e outra para juros compostos
// 2 - cada função recebe 3 argumentos, capital inicial, taxa de juros, e tempo de aplicação
// 3 - deve retornar o montante para o período de juros simples e juros compostos

function jurosSimples(capitalInicial, taxaJuros, tempo) {
    // formula para o calculo do juros simples J=P×i×t
    capitalInicial += capitalInicial * taxaJuros * tempo;
    return capitalInicial.toFixed(2)
}

function jurosCompostos(capitalInicial, taxaJuros, tempo) {
    // formula para o calculo do juros composto M = P x (1 + i) ^ t
    let montanteFinal = capitalInicial * Math.pow(1 + taxaJuros, tempo)
    return montanteFinal.toFixed(2)
}

console.log(jurosSimples(200000, 0.05, 4))
console.log(jurosCompostos(200000, 0.05, 10))

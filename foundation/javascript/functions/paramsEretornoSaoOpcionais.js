function area(altura, largura) {
    const area = altura * largura
    if(area > 20) console.log('Valor não permitido')
    else return area
}

// retorna a area
console.log(area(1, 1))

// mostra a mensagem
// como a função retorna undefined, esse console.log mostra undefined
console.log(area(5, 5))

// como a multiplicação não funcionou, retorna um NaN (not a number)
// esse console.log mostra NaN
console.log(area())

// como a multiplicação falha, retorna NaN
// esse console.log mostra NaN
console.log(area(1))

// passando mais de 1 param pra essa função não faz diferença
// ele pega os dois primeiros e ignora os seguintes
console.log(area(1, 5, 6, 7, 8))

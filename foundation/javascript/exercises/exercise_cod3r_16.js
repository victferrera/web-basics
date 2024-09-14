// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores


function calculadora(a, b, operacao) {
    switch(operacao) {
        case 'soma':
            console.log(`Resultado soma: ${a + b}`)
            break;
        case 'divisao':
            console.log(`Resultado divisão: ${a / b}`)
            break;
        case 'multiplicacao':
            console.log(`Resultado da multiplicação: ${a * b}`)
            break;
        case 'subtracao':
            console.log(`Resultado da subtração: ${a - b}`);
            break;
        default:
            console.log('Operação não suportada')
    }
}

calculadora(5, 5, 'soma') // resultado 10
calculadora(3, 2, 'subtracao') // resultado 1
calculadora(10, 5, 'divisao') // resultado 2
calculadora(3, 3, 'multiplicacao') // resultado 9
calculadora(1, 2, 'outraoperacao') // operação não suportada
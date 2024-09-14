// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A    10%
// B    15%
// C    20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido

const salarioComAumento = (plano, salarioAtual) => console.log(`Novo salário: ${((plano / 100) * salarioAtual) + salarioAtual}`)

function aumentarSalario(plano, salarioAtual) {
    switch(plano) {
        case 'a':
            salarioComAumento(10, salarioAtual)
            break;
        case 'b':
            salarioComAumento(15, salarioAtual)
            break;
        case 'c':
            salarioComAumento(20, salarioAtual)
            break;
        default:
            console.log('Plano inválido')
    }
}

aumentarSalario('a', 1500)
aumentarSalario('b', 1500)
aumentarSalario('c', 1500)
aumentarSalario('d', 1500)
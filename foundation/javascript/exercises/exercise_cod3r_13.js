// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function verificarDiaUtil(diaSemana) {

    if(diaSemana < 1 || diaSemana > 7) return 'Dia não é válido'

    switch (diaSemana) {
        case 1:
        case 7: return "Não é dia útil"
        default: return "É dia útil"
    }
}

console.log(verificarDiaUtil(7)) // não é
console.log(verificarDiaUtil(1)) // não é
console.log(verificarDiaUtil(8)) // é dia útil
console.log(verificarDiaUtil(5)) // é dia útil
console.log(verificarDiaUtil(0)) // dia não é válido
console.log(verificarDiaUtil(15)) // dia não é válido
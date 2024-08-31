// 12) Faça um algoritmo que calcule o fatorial de um número.

function calcularFatorial(numero)
{
    let fatorial = 1;

    for(let i = numero; i > 0; i--)
    {
        fatorial *= i;
    }

    return fatorial;
}

console.log(calcularFatorial(5)) // 120
console.log(calcularFatorial(10)) // 3628800
console.log(calcularFatorial(2)) // 2

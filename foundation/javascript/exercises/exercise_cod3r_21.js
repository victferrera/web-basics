// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

const valorBase = 100;

function calcularPrecoPlano(idade) {

    let valorAPagar = valorBase;

    if(idade < 10) {
        valorAPagar += 80
    } else
    if(idade >= 10 && idade <= 30) {
        valorAPagar += 50;
    } else
    if(idade > 30 && idade <= 60){
        valorAPagar += 95;
    } else
    if(idade > 60) {
        valorAPagar += 130;
    }

    return valorAPagar;
}

console.log(calcularPrecoPlano(5));
console.log(calcularPrecoPlano(33));
console.log(calcularPrecoPlano(61));
console.log(calcularPrecoPlano(8));



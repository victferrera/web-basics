// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.


const notas = [100, 50, 10, 5, 1];

const qtd = [
    {
       key: 100,
       qtd: 0 
    },
    {
        key: 50,
        qtd: 0 
     },
     {
        key: 10,
        qtd: 0 
     },
     {
        key: 5,
        qtd: 0 
     },
     {
        key: 1,
        qtd: 0 
     }
]

function realizarTroco(valor) {

    console.log(`Para o valor de R$ ${valor}`);

    notas.forEach(nota => {
        while (valor - nota >= 0) {
            valor = valor - nota;
            qtd.find(x => x.key === nota).qtd++;
        }
    });

    let resultado = qtd.filter(x => x.qtd > 0);
    
    resultado.forEach(element => console.log(`${element.qtd} de R$ ${element.key}`))

    qtd.forEach(x => {
        if(x.qtd > 0) {
            x.qtd = 0;
        }
    });

    resultado = {};
}

realizarTroco(5);
realizarTroco(10);
realizarTroco(25);
realizarTroco(51);
realizarTroco(125);
realizarTroco(243);

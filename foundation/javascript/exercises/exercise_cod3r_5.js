// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
// seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
// importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
// um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
// que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

// etapas
// 1 - criar a função
// 2 - receber um valor do tipo ponto flutuante
// 3 - retornar o resultado formatado no seguinte formato: R$0,30

function formatarMoeda(valor) {
    let valorFormatado = valor.toFixed(2)
    valorFormatado = valorFormatado.replace('.', ',')
    console.log(`R$${valorFormatado}`)
}

formatarMoeda(0.30000004)
formatarMoeda(1.52365466)
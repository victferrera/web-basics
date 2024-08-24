// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

// etapas
// 1 - criar  a função
// 2 - a função recebe uma string com vários numero nesse formato "10 20 20 8 25 3 0 30 1"
// 3 - retornar um array contendo quantas vezes ele bateu o próprio record e o valor da menor pontuação

function menorPontuacaoERecord(valores) {
    let valoresArr = valores.split(" ").map(Number);
    let jogoComMenorValor;
    let numeroRecords = 1;
    let posicaoJogoMenorValor = 0;

    // o primeiro record é o primeiro valor
    let recordAtual = valoresArr[0]
    jogoComMenorValor = valoresArr[0]

    for(let i = 1; i < valoresArr.length; i++) {
        if (valoresArr[i] > recordAtual) {
            recordAtual = valoresArr[i];
            numeroRecords++;
        };

        if (valoresArr[i] < jogoComMenorValor) {
            posicaoJogoMenorValor = i;
            jogoComMenorValor = valoresArr[i];
        };
    }
    return [numeroRecords, posicaoJogoMenorValor];
}


console.log(menorPontuacaoERecord("10 20 20 8 25 3 0 30 1"))


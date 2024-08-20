// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

// passos
// 1 - criar a função
// 2 - a função deve ter 2 parâmetros, base e expoente
// 3 - retornar base elevada ao expoente

function pow(b, p) {

    if(typeof(b) !== 'number' || typeof(p) !== 'number') {
        console.log('Parâmetros inválidos')
        return
    }

    // primeira forma
    console.log((b ** p).toFixed(2))
    // segunda forma
    console.log(Math.pow(b, p).toFixed(2))
}

pow(1.5, 1.5)
function getInteiroAleatorio(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

console.log(`Valor inicial da opcao é: ${opcao}`)

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}`)
} while(opcao != -1)

console.log('Até a próxima')

// o do while executa pelo menos uma vez, já que a validação dos dados ocorre somente depois
// do ćodigo ter rodado pelo menos 1 vez
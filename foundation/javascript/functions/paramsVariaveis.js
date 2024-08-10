// forma antiga de ter params variáveis
// toda função tem o arguments disponível
// caso você informe os arguments ela vai armazenar eles
// caso não, o array fica vazio
// essa variável é um array

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }

    console.log(soma)
}

// sem argumentos retorna 0
soma()

// dois argumentos
soma(1, 1)

// com três argumentos
soma(1, 2, 3)

// params de tipo diferente
soma(1, 2, 'Teste')

// params string
soma('a', 'b', 'c')
// primeira estratégia pra gera valor padrão

function soma(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    
    console.log(a + b + c)
}

soma()
soma(2, 2)
// aqui o valor zero retorna false, então os valores serão 1
soma(0, 0, 0)

// estratégias 2, 3 e 4 para gerar valor padrão
// 1 in arguments verifica se o array arguments da função tem o index 1
function soma2(a, b, c) {
    a = a !== undefined ? a: 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    
    console.log(a + b + c)
}

soma()
soma(3)
soma(1, 2, 3)
soma(0, 0, 0)

// valor padrão do es

function soma3(a = 1, b = 1, c = 1) {
    console.log(a + b + c)
}

soma3()
soma3(1, 2)
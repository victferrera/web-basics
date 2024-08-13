//closure é o escopo criado quando a função é declarada
//isso permite que a função acesse variáveis externas
//a funcao tem 'memória do local que foi definida', dessa forma ela não lê as variáveis quando é executada, mas sim quando é declarada

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro
}

const f = fora()
console.log(f())
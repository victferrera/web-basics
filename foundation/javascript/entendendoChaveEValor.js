const saudacao = 'Aoba' //contexto léxico 1, local do código que o chave/valor foi definido

function exec() {
    const saudacao = 'Opa' //contexto léxico 2
    return saudacao;
}

//objetos sao grupos aninhados de par chave/valor

const cliente = {
    nome: 'Vitor',
    endereco: {
        rua: 'rua azul'
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

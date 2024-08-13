// factory é um padrão de projeto
// neste caso a função retorna um objeto, 'fabrica' um objeto

function criarPessoa() {
    return {
        nome: 'Ana',
        sobreno: 'Silva'
    }
}

console.log(criarPessoa())
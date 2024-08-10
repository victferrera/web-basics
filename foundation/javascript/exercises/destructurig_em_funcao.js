// Destructuring em Funções:

//     Crie uma função exibirDados que recebe um objeto com as seguintes propriedades: titulo, autor e ano.
//     Utilize destructuring nos parâmetros da função para extrair essas propriedades diretamente.
//     Na função, imprima os valores extraídos no console no formato: "Título: [titulo], Autor: [autor], Ano: [ano]".

const livro = {
    titulo: 'Carrie, A estranha',
    autor: 'IT: A coisa',
    ano: '1979',
    editora: 'Suma de letras'
}

function exibirDados({titulo, autor, ano}) {
    console.log(`Autor: ${autor}, Título: ${titulo}, Ano de publicação: ${ano}`)
}

function exibirEditora({editora}) {
    console.log(`Editora: ${editora}`)
}

exibirDados(livro)
exibirEditora(livro)
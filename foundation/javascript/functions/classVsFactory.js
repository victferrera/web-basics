// a classe pessoa tem o this variável
// se eu jogar esse código no navegador e executá-lo, o this vai estar apontando para o document e não para o objeto
class Pessoa {
    constructor (nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Vitor')
p1.falar()

// ja com a função construtora é diferente, se eu jogar o código no navegador e executa-lo, vou receber a mensagem esperada
// isso acontece por que não preciso acessar o this pra imprimir o nome
// esse objeto tem 'consciência de onde foi declarado'
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

// portar o classe pessoa pra função construtora

function portarPessoa (nome) {
    this.nome = nome

    this.falar = () => {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new portarPessoa('Sandra')
p3.falar()
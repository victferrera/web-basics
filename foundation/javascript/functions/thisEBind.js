const pessoa = {
    saudacao: 'Olá, prazer!!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // muda o contexto, já não é mais o objeto pessoa

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
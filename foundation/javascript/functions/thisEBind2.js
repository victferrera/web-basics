function Pessoa() {
    this.idade = 0

    const self = this 
    // como o self foi executado dentro da função Pessoa, ele aponta diretamente pra ela e o this não varia
    // outra forma com que o this não varia, é utilizar o bind
    // outra forma também é utilizar arrow function no lugar de function ()
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

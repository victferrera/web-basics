function Pessoa() {
    this.idade = 0

    // o this usando arrow function sempre vai apontar pro contexto onde foi definido, ele não irá variar
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
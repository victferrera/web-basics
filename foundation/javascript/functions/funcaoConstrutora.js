// aqui os params da função funcionam como params de um construtor
// velocidadeAtual é como se fosse uma variável privada, não é possível acessar ela fora da função
// getVelocidadeAtual é um método para acessar a velocidade atual

function Carro (velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0

    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
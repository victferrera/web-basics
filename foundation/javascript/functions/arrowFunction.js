
// função anônima
let dobro = function (a) {
    return 2 * a
}

// arrow function (omite o function) com 1 param
dobro = (a) => {
    return 2 * a
}

// arrow function com 1 param é possível omitir os ( )
// e quando a arrow function executa uma única linha, é possível remover o delimitador de block { }
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

// função anônima
let ola = function () {
    return 'Olá'
}

// arrow function sem param e que executa uma única linha
ola = () => 'Olá' 

// também é possível substituir os ( ) por _, essa notação significa que o JS vai ignorar esse param
// ou você pode usar ele também
// usando o param
//ola = _ => `Olá ${_}`
// ignorando o param
ola = _ => 'Olá'

console.log(ola())
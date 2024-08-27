// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false.

function validarDivisorPor3(numero) {
    if((numero % 3) === 0) return true
    return false
}

console.log(validarDivisorPor3(3)) // divisível por 3
console.log(validarDivisorPor3(9)) // divisível por 3
console.log(validarDivisorPor3(10)) // não é divisível por 3
console.log(validarDivisorPor3(12.2)) // não é divisível por 3
console.log(validarDivisorPor3(81)) // divisível por 3
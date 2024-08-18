
// json é um formato de dados, para transferência de dados amplamente utilizado para interoperabilidade entre sistemas

const obj = {a: 1, b:2, c:3, soma(){ return a + b + c }}

console.log(JSON.stringify(obj))
console.log(JSON.parse(JSON.stringify(obj)))


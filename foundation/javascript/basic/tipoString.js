//string é uma cadeia de caracteres
//delimitar strin com '' ou "" ou `` -> esse ultimo é template string

const escola = "Coder"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // não retorna nada
console.log(escola.charCodeAt(2))
console.log(escola.indexOf('C'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3))
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace('C', 'c'))
console.log('Ana,Maria,Pedro'.split(','))

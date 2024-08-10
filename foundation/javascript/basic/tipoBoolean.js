let isAtivo = false
console.log(isAtivo);

isAtivo = true
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})

console.log('os falsos...');
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = NaN))

// a regra é que os valores NaN, undefined, 0, -0, null e false são considerados false
// e o restante dos valores, incluindo os objetos ou até a string 'false' sao considerados true
// basicamente todo tipo aqui por 'traz dos panos' tem um valor correspondente em bool
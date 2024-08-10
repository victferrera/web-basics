console.log(a);
var a = 2
console.log('a =', a)

//esse codigo nao executa, por que com o let nao da pra acessar antes de inicializar
//aqui nao acontece hoisting
console.log('b =', b)
let b = 1;
console.log('b =', b)

// aqui o interpretador da linguagem faz o hoisting da variavel
// ele declara a variavel porém sem o valor
// o hoisting tambem acontece dentro de funcoes
// o codigo final seria esse

/*
var a;
console.log(a);
a = 2;
console.log('a =', a)
*/
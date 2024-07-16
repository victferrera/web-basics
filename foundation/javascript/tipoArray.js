//array é um tipo e dados dinamico
//heterogenio, da pra misturar string com number com null e outras coisas

const valores = [10, 15, 20, 35, 40, 55, 7.8]
console.log(valores);

console.log(valores[0], valores[7]);

valores[10]  = 10

console.log(valores[10]);
console.log(valores.length);

//insere no array com push
valores.push(15);
console.log(valores);

//remove o ultimo elemento do array
valores.pop();
console.log(valores);

//remove no index
delete valores[1]
console.log(valores);
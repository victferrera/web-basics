// referencia e atribuicao

//referencia é um endereço de memoria que a variavel aponta
//tipo primitivos fazem cópia por valor

//variavel nao inicializada
let valor

console.log(valor);

//aqui o valor nem foi declarado
// console.log(valor2);

//null significa que a variavel nao aponta pra nenhum local de memória
let valor3 = null;
console.log(valor3);
//console.log(valor3.toString()); // Erro!

const produto = {}
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50

console.log(produto.preco);

produto.preco = undefined // evitar atribuir, deixar para a linguagem

console.log(!!produto.preco);

produto.preco = null // sem referencia
console.log(produto);

delete produto.preco

console.log(produto);




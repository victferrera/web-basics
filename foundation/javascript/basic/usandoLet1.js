//variaveis em escopo diferente retorna resultados diferentes
// se a variavel let numero trocar de nome, ele busca em outro escopo pelo identificar
// pra poder imprimir
var numero = 1;

{
    let numero = 2;
    console.log('dentro =', numero);
}

console.log('fora =', numero);
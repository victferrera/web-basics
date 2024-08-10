//var ignora a maioria dos blocos, exceto bloco de funcao
var numero = 1;

{
    var numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora =', numero);
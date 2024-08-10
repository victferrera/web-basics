// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(5, 5);
//imprimirSoma(2); // error NaN



//funcao com retorno
function soma(a, b = 0){
    return a + b;
}

console.log(soma(5,2));
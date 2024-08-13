//existe uma diferença entre essa primeira função e a segunda
//quando o interpretador js lê o arquivo, ele faz um 'hoisting' das funções, isso quer dizer que antes de executar o código
//ele ja já tem as funções carregadas

//se chamar a função abaixo aqui, ela já vai estar disponível
soma(10, 5)

//function declaration
function soma(y, x) {

}

//se chamar a função abaixo, iremos ter um erro
//'cannot access 'sub' before initialization'
//sub(5, 5)

//aqui como a função é uma variável const (pode ser let)
//ela não fica disponível como a primeira

//function expression
const sub = function (x, y) {
    return x - y
}

//a função abaixo funciona da mesma forma que a segunda, mesmo tendo o nome da função na declaração
//ela fica disponível só depois da linha de declaração

//named function expression
const mult = function multi(x, y) {
    return x * y
}
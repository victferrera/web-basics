// Função em javascript é First-Class Object (Citizens)
// Higher-order function
// basicamente o que isso significa é: a função é tratada como um dado
// é possível passar uma função como parâmetro ou até mesmo salvar uma função em uma variável

// criar de forma literál
function fun1() { }

// armazenar função em uma variável
const fun2 = function () { }

// armazenar função em um array

const arr = [function (a, b) { return a + b }, fun1, fun2]
console.log(arr[0](2, 3))

// armazenar função em atributo de objeto
const obj = {}
obj.falar = function () { console.log('Opa') }
obj.falar();

// passar função como param
function run(func) {
    func()
}
run(() => console.log('Executando...'))

// função que retorna outra função
function soma(a, b) {
    return (c) => console.log(a + b + c)
}

// primeira forma
const fun3 = soma(3, 2)
fun3(5)

// segunda forma
soma(3, 2)(4)
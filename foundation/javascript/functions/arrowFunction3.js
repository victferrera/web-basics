let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
// no ambiente do node, cada arquivo é um modulo, e o contexto do this no arrow function é o próprio módulo
// neste caso a referência para o próprio modulo podemos usar module.exports
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)

comparaComThisArrow(obj)
// a linha abaixo retorna true, por que o arrow function não permite alterar o contexto do this
comparaComThisArrow(module.exports)
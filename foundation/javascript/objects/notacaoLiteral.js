const a = 1
const b = 2
const c = 3

// forma antiga de criar objeto
const obj1 = {a: a, b: b, c: c}
// forma nova e mais resumida
const obj2 = {a, b, c}

console.log(obj1)
console.log(obj2)

const nomeAttr = 'nota'
const valorAttr = 7.5

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        return 'Olá'
    }
}

const obj6 = {
    funcao1(){
        return 'Olá'
    }
}

console.log(obj5.funcao1())
console.log(obj6.funcao1())
console.log()

const obj1 = {}
obj1.nome = 'Bola'
obj1.preco = '10.50'
console.log(obj1);

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj()
obj2.nome = 'Vitor'
obj2.sobrenome = 'Silva'
console.log(obj2);
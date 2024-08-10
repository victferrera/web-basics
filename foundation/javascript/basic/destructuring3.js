function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

console.log(rand({min: 5, max: 10}));
console.log(rand({}))
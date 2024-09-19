// 19) O cardápio de uma lanchonete é o seguinte:
// Código   Descrição do Produto        Preço
// 100      Cachorro Quente             R$ 3,00
// 200      Hambúrguer Simples          R$ 4,00
// 300      Cheeseburguer               R$ 5,50
// 400       Bauru                      R$ 7,50
// 500      Refrigerante                R$ 3,50
// 600      Suco                        R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const produtos = [
    {
        nome: 'Cachorro Quente',
        codigo: 100,
        preco: 3.00
    },
    {
        nome: 'Hambúrguer Simples',
        codigo: 200,
        preco: 4.00
    },
    {
        nome: 'Cheeseburguer',
        codigo: 300,
        preco: 5.50
    },
    {
        nome: 'Bauru',
        codigo: 400,
        preco: 7.50
    },
    {
        nome: 'Refrigerante',
        codigo: 500,
        preco: 3.50
    },
    {
        nome: 'Suco',
        codigo: 600,
        preco: 2.80
    }
]

function realizarVenda(codigoProduto, quantidade) {
    let produto = produtos.find(x => x.codigo === codigoProduto);

    if(!produto) {
        return 'Produto não existe';
    }

    let valorPagar = produto.preco * quantidade;

    return `Total a pagar é: R$ ${valorPagar}`;
}

console.log(realizarVenda(50, 10)) // não existe
console.log(realizarVenda(100, 2)) // pagar 6.00
console.log(realizarVenda(600, 1)) // pagar 2.80
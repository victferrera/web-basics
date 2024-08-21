// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

// etapas
// 1 - criar a função
// 2 - a função deve receber dois parametros do tipo number, o dividendo e o divisor
// 3 - retornar o resultado de dividendo divido pelo divisor e também o resto

function divisaoEResto(dividendo, divisor) {
    if(typeof (dividendo) !== 'number' || typeof(divisor) !== 'number' || divisor === 0) {
        console.log('Parâmetros inválidos')
        return
    }        

    let resultado = dividendo / divisor;
    let resto = dividendo % divisor;

    console.log('Resultado da divisão:', resultado, 'Resto da divisão:', resto)
}

// testes
divisaoEResto(4, 0) // divisão por 0 não existe
divisaoEResto(5, 2) // neste caso o js faz a seguinte conta 5 = 2x2+1, então o resto aqui é 1
divisaoEResto(25, 2) // mesmo caso do anterior
divisaoEResto(10, 2) // divisão exata
divisaoEResto(4, 2) // divisão exata
function teste1(num) {
    if(num > 7) 
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // cuiado com o ;, por que ele é uma sentença de código, neste caso o bloco não pertence ao if
        console.log(num)
    }
}

teste2(6)
teste2(8)
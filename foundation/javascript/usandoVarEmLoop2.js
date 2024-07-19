const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(() => {
        console.log(i)
    });
}

funcs[2]()
funcs[8]()

// como o var nao tem escopo de bloco, ele pega o valor final do i na hora do console.log
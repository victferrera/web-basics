const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(() => {
        console.log(i)
    });
}

funcs[2]()
funcs[8]()

// como o let tem escopo de bloco, ele consegue lembrar qual o valor declarado do i no momento da criação da função
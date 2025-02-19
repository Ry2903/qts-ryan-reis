let a = 'oi'
let b = 'olá'

Deno.test("Teste do oi (no API)", () => { //Esse teste verifica se "a" não é oi
    if (a != "oi") {
        throw new Error(`${a} não é o oi`); //Se a é diferente de oi, então o teste deu errado
    } else {
        console.log(`${a} é de fato o oi`); //Se a é igual a oi, então o teste deu certo
    }
})

Deno.test("Não pode ser oi (no API)", () => {  //Esse teste verifica se "b" não é oi
    if (b == "oi") {
        throw new Error(`${b} é oi. Portanto está errado`); //Se b é igual a oi, então o teste deu errado
    } else {
        console.log(`${b} não é oi. Portanto o teste está correto!`); //Se b é diferente de oi, então o teste deu certo
    }
})
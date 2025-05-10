// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')()

let num
let total = 0
let repeticoes = 0

do {
    num = Number(prompt("Digite o numero a ser adicionado: "))

    if (num != 0) {
        total += num
        repeticoes++
    } else if (repeticoes == 0) {
        console.log("Nao houve repeticoes")
    } else {
        console.log(`O total de ${total} foi obtido em ${repeticoes} repeticoes e sua media aritmetrica e ${total/repeticoes}`)
    }



}while (num != 0)
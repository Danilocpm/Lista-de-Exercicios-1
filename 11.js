// Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()

let num
let total = 0

for (i = 1; i <= 5; i++) {
    num = Number(prompt("Insira o numero a ser somado: "))
    total += num
    console.log(total) 
}
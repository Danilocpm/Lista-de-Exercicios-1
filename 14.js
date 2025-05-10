// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()

const num = Number(prompt("Qual numero ira ser fatoriado? "))

if (!Number.isInteger(num) || num < 0) {
    console.log("Digite um número inteiro não negativo.");
} else {
    let fatorial = 1
    for ( let i = num; i > 1; i--) {
    fatorial *= i
}

console.log(`O fatorial de ${num} é ${fatorial}`)

}

// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let num = Number(prompt("Insira um numero: "))

    if(!Number.isInteger(num) || isNaN(num)) {
        console.log("Este valor nao e um inteiro")
    } else {
        for (i = 1; i <= 10; i++)
        console.log(num)
    }

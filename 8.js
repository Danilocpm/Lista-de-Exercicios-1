// Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite um numero: "))

if (num1 === num2) {
    console.log("Ambos numeros sao iguais")
} else if(num1 > num2) {
    console.log(num2, ',', num1)
} else {
    console.log(num1, ',', num2)
}
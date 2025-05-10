// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let valor = Number(prompt("Digite o numero: "))

if(!Number.isInteger(valor) || isNaN(valor)) {
    console.log("Este valor nao e um inteiro")
} else if((valor % 2) == 0) {
    console.log("Numero Par")
} else {
    console.log("Numero impar")
}
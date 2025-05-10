// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')()

let peso = Number(prompt("Insira seu peso em kg: "))
let altura = Number(prompt("Insira sua altura em metros: "))
const IMC = peso / (altura ** 2)

if (IMC <= 18.5) {
    console.log("Baixo peso")
} else if (IMC >= 18.5 && IMC <= 24.9){
    console.log("Peso Normal")
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log("Sobrepeso")
} else if (IMC >= 30 && IMC <= 39.9) {
    console.log("Obesidade")
} else {
    console.log("Obesidade Grave")
}
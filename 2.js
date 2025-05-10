// Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

let idade = Number(prompt("Insira a sua idade: "))

if(!Number.isInteger(idade) || isNaN(idade)) {
    console.log("Numero nao e um inteiro")
}else if(idade < 13) {
    console.log("criança")
}else if(idade >= 13 && idade < 18) {
    console.log("adolescente")
}else if(idade >= 18 && idade < 60) {
    console.log("Adulto")
}else {
    console.log("Idoso")
}
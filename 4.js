// Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()


let opcao = Number(prompt("Escolha a opcao 1,2 ou 3 do menu: "))

switch(opcao) {
    case 1:
        console.log("Opcao 1")
        break
    case 2:
        console.log("Opcao 2")
        break
    case 3:
        console.log("Opcao 3")
        break
    default:
        console.log("Erro: Nenhuma das opcoes informadas")

}
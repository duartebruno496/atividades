// (OBRIGATÓRIO) Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função. Escreva o resultado da função na tela dizendo qual menor número.



var rs = require("readline-sync");
var n1 = rs.questionInt("Digite o primeiro numero: ")
var n2 = rs.questionInt("Digite o segundo numero: ")

function maior (a,b){
    if( a > b){
        console.log(`Numero ${a} é maior que o numero ${b}`)
    }
    else if( b > a){
        console.log(`Numero ${b} é maior que o numero ${a}`)
    }
    else{ console.log(`Numero ${a} e ${b} são iguais`)
}
}

maior(n1,n2)
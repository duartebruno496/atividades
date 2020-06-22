// (OBRIGATÓRIO) Escreva um programa que pedirá para o usuário dois números entre 1
// e 100. O programa deve, então, iterar de um em um do menor pro maior, sempre
// imprimindo o número na tela do usuário. Entretanto, caso o número seja divisível por 7,
// o programa deve ao invés disso imprimir a palavra “Ping”. Caso o número seja divisível
// por 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, o
// programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvez
// precisem fazer uso do recurso “user.questionInt()” que transforma o conteúdo de um
// input do usuário de string para inteiro.


var rs = require("readline-sync")

var n1 = rs.questionInt("Insira um número entre 1 e 100 : ")
var n2 = rs.questionInt("Insira outro número entre 1 e 100 : ")

if (n1 <= n2) { //Comparando quando o n2 maior que o n1

    while (n1 <= n2) {  //Laço para repetição do ping pong 
        if(n1 % 7 == 0 && n1 % 5 == 0){ // se divisivel por 5 e 7 imprime ping pong 
            console.log ("Ping Pong")
        }
        else if (n1 % 7 == 0) { // se divisivel por 7 imprime ping 
            console.log("Ping")
        }
        else if (n1 % 5 == 0) { //se divisivel por 5 imprime pong 
            console.log("Pong")
        } else {
            console.log(n1) //quando numero nao é divisivel por 5 ou 7
        }
        n1++ //incrementando para aparecer de um em um 
    }
}
else { //comparação enquanto o n2 for menor que o n1 
 while (n2 <= n1) {
    if(n2 % 7 == 0 && n2 % 5 == 0){  // se divisivel por 5 e 7 imprime ping pong 
        console.log ("Ping Pong")
    }
        else if (n2 % 7 == 0) { // se divisivel por 7 imprime ping 
            console.log("Ping")
        }
        else if (n2 % 5 == 0) { //se divisivel por 5 imprime pong 
            console.log("Pong")
        } else {
            console.log(n2) //quando numero nao é divisivel por 5 ou 7
        }
        n2++ //incrementando para aparecer de um em um 
    }
} 








//logica
//inputar o primeiro número entre 1 e 100
//inputar o segundo numero entre 1 e 100
//iterar do menor para o maior numero imprimindo de 1 em 1 
//caso o numero seja divisivel por 7, irá imprimir a palavra ping 
//caso o numero seja divisivel por 5, deve imprimir pong 
//caso seja divisivel por 5 e 7 deve imprimir ping pong 

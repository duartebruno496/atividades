// Faça um programa que recebe um número e imprima todos os números pares de 0 até o número inserido. Ex: usuário inseriu​ 8 O programa imprime 0 2 4 6 8 

var rs = require('readline-sync');
var n2 = rs.questionInt('Digite um numero: ')
var n1 = 0 // valor setado em zero pois é o começo da impressão dos numeros



while (n1 < n2){
    var resto = n1%2;
    if (resto == 0){
        n1 = n1 + 2; 
        console.log('Os números são: ' + n1);      
    }
    
}



//programa recebe um numero 
// programa imprime todos os numeros pares de 0 ate o inserido






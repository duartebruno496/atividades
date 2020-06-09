// As maçãs custam R$ 0,30 cada se forem compradas menos do que
// 12, e R$ 0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número
// de maçãs compradas, calcule e escreva o valor total da compra



var rs = require('readline-sync');
var n =  rs.questionInt('Digite a quantidade de macas: ');
var x = 0.30
var y = 0.25

if (n <= 11 ){
    
    console.log("O valor das maçãs é: ", n += x );
}else{
    
    console.log("O valor das maçãs é: ", n += y);
}
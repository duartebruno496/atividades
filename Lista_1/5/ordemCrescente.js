// Escreva um programa para ler 3 valores inteiros (considere que não
// serão lidos valores iguais) e escrevê-los em ordem crescente.



var rs = require('readline-sync');
var n1 =  rs.questionInt('Digite o primeiro numero: ');
var n2 =  rs.questionInt('Digite o segundo numero (diferente do primeiro): ');
var n3 =  rs.questionInt('Digite o terceiro numero (diferente dos dois anteriores): ');

if (n1 < n2 && n1 < n3){
    console.log("A ordem crescente é: ", n1, n2, n3);    
 }else if(n2 < n1 && n2 < n3){ 
    console.log("A ordem crescente é: ", n2, n1, n3);   
}else if(n3 < n1 && n3 < n2){    
    console.log("A ordem crescente é: ", n3, n2, n1);
}
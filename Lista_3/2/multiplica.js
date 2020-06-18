// ​Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM usar o operador de multiplicação (*) 
// programa ok

var rs = require('readline-sync');
var n1 = rs.questionInt('Digite o primeiro numero: ') // usuario entra com o primeiro numero
var n2 = rs.questionInt('Digite o segundo numero: ') // usuario entra com o segundo numero
var soma = 0; 
var num = 0;

while (num < n1){
    
    var soma = soma + n2; // realiza a soma dos valores até finalizar a comparação 
    num++; 
    
}

console.log('A multiplicação é: ', soma)

// (OBRIGATÓRIO) Faça uma função que recebe por parâmetro um valor inteiro e positivo e retorna o valor lógico Verdadeiro caso o valor seja primo e Falso em caso contrário.
// Solicite ao usuário o número e no final imprima se é primo ou não utilizando a função na condição IF.

var rs = require("readline-sync"); 
var numInt = rs.questionInt("Digite um número: "); 

function primo(numInt) { 
   var ehPrimo = true //coloca como verdadeiro que todo numero é primo 
    for (var i = 2; i < numInt; i++) { 
        if (numInt % i == 0) { //verifica se o resto da divisão é zero
        ehPrimo = false //resto diferente de zero então não é primo 
       
        }
        return ehPrimo 
   }
}
console.log(primo(numInt)) //imprime numero primo é true ou false 
// (OBRIGATÓRIO) Faça uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
// Então solicite ao usuário o raio da esfera e utilize a função para exibir o resultado.

var rs = require("readline-sync");
var numero = rs.questionInt("Digite raio: ");

function volume (n) {//função que recebe um numero 
    var volume = (4*Math.PI*n**3)/3 //realizando o calculo da função
    return volume    
}

console.log(volume(numero)) 
// (OBRIGATÓRIO) Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.

var rs = require("readline-sync");
console.log("Atenção!!!Digite sua idade no formato anos, dias e meses");
var anos = rs.questionInt("Digite os anos:  ");
var meses = rs.questionInt("Digite os meses:  ");
var dias = rs.questionInt("Digite os dias:  ");


function calculaDias (a, m, d) { // função que verifica ano mes e dia, depois calcula pelo tempo de um mês e um ano, em seguida retorna os dias
    var dias = a+(m*30)+(a*30*12);
    return dias
}

console.log(`Você tem: ${calculaDias(anos, meses, dias)} dias de vida`)
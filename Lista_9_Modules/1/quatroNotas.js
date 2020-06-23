// (OBRIGATÓRIO) Faça uma programa que receba 4 notas e calcule a mediana e apresente ao usuário o resultado.
// Utilize o pacote : https://www.npmjs.com/package/median


var median = require('median'); //requisita o pacote npm de media 

var rs = require('readline-sync');

var notas = [] //array para receber as notas 

console.log('Digite quatro notas')

for(var i = 0; i < 4; i++ ){ //enquanto não digitar as 4 notas o codigo é executado
    var nota = rs.questionInt('Nota: ') // usuario inputa as notas
    notas[i] = nota; //array para verificação da media das notas 
}

var media = median(notas)

console.log('A média é: ', media)

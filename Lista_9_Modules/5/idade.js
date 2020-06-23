// (OBRIGATÓRIO) Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

var rs = require('readline-sync');
let {AgeFromDateString, AgeFromDate} = require('age-calculator'); 


var nascimento = rs.question('Digite seu nascimento, no formato (ano-mes-dia): ')
var ageFromString = new AgeFromDateString(nascimento).age;
console.log('Sua idade é: ', ageFromString); 
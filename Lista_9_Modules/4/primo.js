// (OBRIGATÓRIO) Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number


var rs = require('readline-sync');

const isPrime = require('prime-number')

var numero = rs.questionInt('Digite um numero: ');

if (isPrime(numero)) {
    console.log('Esse numero é primo')
} else {
    console.log ('Esse numero não é primo')
}
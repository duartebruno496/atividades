// (OBRIGATÓRIO) Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

var rs = require('readline-sync');
const FasamImc = require('fasam-imc-calc'); 
const imc = new FasamImc();


var peso = rs.questionFloat('Informe seu peso: ');
var altura = rs.questionFloat('Informe sua altura: ');

console.log('O IMC é: '  , imc.calc(peso, altura))



// Escreva um programa para ler o ano de nascimento de uma pessoa e
// escrever uma mensagem que diga se ela poderá ou não votar este ano (não é
// necessário considerar o mês em que ela nasceu).

var rs = require('readline-sync');

var n = rs.questionInt('Digite seu ano de nascimento '); 

if (n < 2002 ){
    console.log("Você poderá votar esse ano")
}else{
    console.log("Você não poderá votar esse ano")
}





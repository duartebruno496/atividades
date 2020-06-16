// Faça um programa que receba três notas, calcule e mostre a média aritmética entre elas, caso a média aritmética seja: Media maior ou igual a 7 imprimir :   ALUNO APROVADO  Media menor que 7 imprimir :   ALUNO REPROVADO 

// - Programa recebe tres notas 

var rs = require('readline-sync');
var nota1 = rs.questionFloat('Digite a primeira nota: ');
var nota2 = rs.questionFloat('Digite a segunda nota: ');
var nota3 = rs.questionFloat('Digite a terceira nota: ')
var notaFinal = [];

//somar as notas e mostrar a média 

if(nota1 + nota2 + nota3){
    console.log('Sua nota final é: ', notaFinal)
}

//revisar o código

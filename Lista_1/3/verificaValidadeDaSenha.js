// Escreva um programa que verifique a validade de uma senha
// fornecida pelo usuário.
// A senha válida é o número 1234.
// Devem ser impressas as seguintes mensagens:
// - ACESSO PERMITIDO caso a senha seja válida.
// - ACESSO NEGADO caso a senha seja inválida

var rs = require('readline-sync');

var n =  rs.questionInt('Digite uma senha: ');

if (n == 1234){
    console.log("Acesso Permitido");
}else{
    console.log("Acesso Negado");
}

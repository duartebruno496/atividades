// ​Faça um programa que pergunta ao usuário :  “Insira 0 para sair ou qualquer outra tecla para o continuar.” Se o usuário inserir 0 o programa encerra. Se o usuário inserir qualquer outra coisa o programa pergunta novamente :  “Insira 0 para sair ou qualquer outro número para o continuar.”  Até o usuário sair


var rs = require('readline-sync');
var pergunta 

while(pergunta != 0){
       pergunta = rs.question('Insira 0 para sair ou qualquer outra tecla para o continuar: '); 
          
}

//= rs.question('Insira 0 para sair ou qualquer outra tecla para o continuar: ');
//var pergunta2

// while(true){
//     if (pergunta == 0){
//         console.log('Programa encerrado')
//         break
//     }else if(pergunta2 != 0){
//         console.log('Insira 0 para sair ou qualquer outro número para o continuar.')
//         return
//     }    
// }


//console.log('Insira 0 para sair ou qualquer outro número para continuar.')
      
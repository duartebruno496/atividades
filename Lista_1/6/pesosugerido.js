
// Tendo como entrada a altura e o sexo codificado da seguinte forma:  Valor 1 para feminino  Valor 2 para masculino de uma pessoa, construa um programa que calcule e imprima o valor de peso sugerido, utilizando as seguintes fórmulas:  - para homens: (72.7 * Altura) – 58  - para mulheres: (62.1 * Altura) – 44.7  


var rs = require('readline-sync');
var sexo = rs.questionInt('Digite 1 para Feminino ou 2 para masculino: ');
var altura = rs.questionFloat('Digite a sua altura: '); 


//  if (sexo === 1){
//         console.log('Seu peso ideal é: ', ((62.1 * altura) – 44.7));
    
//  }else if(sexo === 2){
//         console.log('Seu peso ideal é: ', (72.7 * altura) – 58);
//  } else{
//       console.log('Digite um sexo válido.')  
//  }


if (sexo === 1) {
	console.log('seu peso ideal :', ((62.1 * altura) - 44.7));
} else if (sexo === 2) {
	console.log('seu peso ideal :',  ((72.7 * altura) - 58));
} else {
	console.log('sexo invalido');
}
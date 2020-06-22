//  ​Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000.  



var cont = 0 
var resultado = 0

while(cont <= 1000){ // verifica enquanto o contador é menor que mil 
    if (cont % 3 == 0 || cont % 5 == 0){ //verificando os multiplos de 3 ou 5 
        var resultado = resultado + cont
    }
    
   cont ++
   
}

console.log(resultado)
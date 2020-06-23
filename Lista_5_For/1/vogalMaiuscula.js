// //(OBRIGATÓRIO) Faça um algoritmo que receba uma entrada do usuário e caso encontre uma vogal transforme ela em maiúscula (obrigatório usar FOR)
// EX: abelha
// O algoritmo imprime
// AbElhA

// Dicas para esta atividade.
// Para selecionar 1 caracter da string utilizamos a função charAt : 
// var nome = “oi”
// console.log(nome.charAt(0))
// console.log(nome.charAt(1))
// O algoritmo imprime: 
// > o
// > i

// O número que colocamos dentro de charAt é a posição do caractere que queremos da string. Lembrando que o primeiro elemento é 0 e não 1.
// Sendo assim, uma string de 2 elementos possui os elementos 0 e 1. 
// Para cada charAt você deve concatenar isto numa string separada e exibir ela no final 



var rs = require('readline-sync');
var verifica = ''; //em branco para verificar a palava 
var verifica = rs .question("Entre com uma palavra: ");
var palavra = verifica.split(''); // realiza o split da palava
for (let i = 0; i < verifica.length; i++){ //para verificar todo o comprimento da palavra 
    if(verifica[i] === "a"){ //para verificação de vogais 
        palavra[i] = verifica.charAt(i).toUpperCase();
    }
}
console.log(palavra.join(''));
// / (OBRIGATÓRIO) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. 
// // Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números iguais que o jogador A e B colocaram.
// // EX: Jogador A : 1, 2, 3, 4, 5
// // Jogador B : 1,2,3,8,7
// // Algoritmo imprime :
// // 1,2,3 
// // Esse é um problema classicamente conhecido como Inner Join

var rs = require("readline-sync")
var jogador1 = rs.question("Digite o nome do primeiro jogador: ")
var jogador2 = rs.question("Digite o nome do segundo jogador:  ")
var numj1 = [] // array para verificação de numeros do primeiro jogador 
var numj2 = [] // array para verificação de numeros do segundo jogador
var CompararNumeros = [] //array para comparar os numeros

for (var i = 0; i < 5; i++){  //comparação para pedir os 5 numeros 
var pedenumero = rs.questionInt(`${jogador1}, digite  ${i+1} numero de 0 a 10: `)
numj1.push(pedenumero)
}
for (var i = 0; i < 5; i++){ 
    var pedenumero = rs.questionInt(`${jogador2}, digite ${i+1} numero de 0 a 10: `)
    if (numj1.includes(pedenumero)){CompararNumeros.push(pedenumero)} 
    numj2.push(pedenumero)
}

console.log(`Os numeros escolhidos por ${jogador1} foram ${numj1}`);
console.log(`Os numeros escolhidos por ${jogador2} foram ${numj2}`);
console.log(`Os numeros iguais foram ${CompararNumeros}`)
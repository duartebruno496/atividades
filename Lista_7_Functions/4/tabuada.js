// (OBRIGATÓRIO) Faça uma função que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até 9. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// 9 x N = 9N
// Teste sua função pedindo uma entrada do usuário


var rs = require("readline-sync")

function tabuada(n){ //cria a função tabuada 
    for (var i = 1; i <= numero; i++){
        var calctabuada = i*numero //realiza o calculo da tabuada 
    console.log(`${numero}x${i}=${calctabuada}`)
    }

}

var numero = 0;
tabuada(numero)
numero = rs.questionInt("Informe o numero para calcular a tabuada: ")
tabuada(numero)
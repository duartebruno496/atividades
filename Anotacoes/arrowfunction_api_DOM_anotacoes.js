
var rs = require('readline-sync')
var carros = require(''); // adicionar o Json
const { log } = require('console');

var hp = rs.questionInt('Qual o minimo HP dos carros?');

function numeroDeCarros(minimoHp, carros) {
    // var contadorDeCarros = 0;
    // for (var i = 0; i < carros.lenght; i++){
    //     var carro = carros[i];
    //     if (carro.Horsepower >= minimoHp){
    //         contadorDeCarros++;
    //     }

    var carrosComHpMinimo = carros.filter {
        function (carro) {
            if (carro.Horsepower >= minimoHp)
                return true;
        }
    return false;
};
return carrosComHpMinimo.lenght;
    }


var resultado = numeroDeCarros(hp, carros);
console.log(resultado);

=============================================
Arrow Function:

(carro) => carro.Horsepower >= hp

============================================

API´s

Instalar o Axios para configurar as requisições HTTPXML

var axios = require('axios'); //chamar o axios

axios.get(api + '/pokemon'); // requisição get para a api no caso a do pokemon

new Promise(() => {}) //determinar o tempo de requisição assincrona quando utilizado uma API
.then((resposta) =>{
    console.log('Sucesso', resposta.data);
})
.catch((erro) => {
    console.log('Erro',erro.data);
})

=====================================
DOM


=====================================











// Crie um programa que receba 3 entradas do usuário. A cor, o modelo e a marca, crie um objeto Carro e atribua as entradas do usuário neste objeto.
// No final o programa deve imprimir as informações do carro.
// Utilize a criação de objetos para resolver este problema


var rs = require('readline-sync');
var corCarro = rs.question('Digite a cor do carro: ')//para armazenar a cor do carro 
var modeloCarro = rs.question('Digite o modelo do carro: ')//armazena o modelo do carro 
var marcaCarro = rs.question('Digite a marca do carro: ')

var carro = {} //cria objeto carro em branco 
carro.corCarro = corCarro //instancia propriedade cor no carro
carro.modeloCarro = modeloCarro //instancia propriedade modelo no carro 
carro.marcaCarro = marcaCarro //instancia propriedade marca no carro 

console.log(carro)
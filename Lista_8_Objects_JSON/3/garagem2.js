// (OBRIGATÓRIO)Faça um programa que lê o arquivo carro.json utilizando a biblioteca e ‘fs’ para ler o arquivo e após isso utilize o método JSON.parse para deserializar o objeto em string.  
// Após isso imprima os valores lidos do json do arquivo.
// OBS: altere o arquivo salve e rode o programa novamente e veja os dados sendo mudados a cada execução.


var rs = require('readline-sync');
var fs = require('fs'); //para salvar o arquivo JSON
var garagemCarro = 'carro.json'; // caminho do arquivo json
var carroSerializado = fs.readFileSync(garagemCarro); // para serializar o arquivo JSON
var carroDescerializado = []; // para descerializar o objeto carro
carroDescerializado.push(JSON.parse(carroSerializado)); //para adicionar mais elementos no objeto

console.log(carroDescerializado); 

var corCarro = rs.question('Digite a cor do carro: ')//para armazenar a cor do carro 
var modeloCarro = rs.question('Digite o modelo do carro: ')//armazena o modelo do carro 
var marcaCarro = rs.question('Digite a marca do carro: ')

var carro = {} //cria objeto carro em branco 
carro.corCarro = corCarro //instancia propriedade cor no carro
carro.modeloCarro = modeloCarro //instancia propriedade modelo no carro 
carro.marcaCarro = marcaCarro //instancia propriedade marca no carro 

console.log(carro)


var carroSerializado = JSON.stringify(carro) //para serializar o objeto carro 

fs.writeFileSync(garagemCarro,carroSerializado)//pasta de destino e arquivo enviado
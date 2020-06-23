// (OBRIGATÓRIO)Adicione no programa anterior, após a impressão dos dados, a funcionalidade de salvar o objeto carro em formato JSON. 
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’

var rs = require('readline-sync');
const { fstat } = require('fs');
var corCarro = rs.question('Digite a cor do carro: ')//para armazenar a cor do carro 
var modeloCarro = rs.question('Digite o modelo do carro: ')//armazena o modelo do carro 
var marcaCarro = rs.question('Digite a marca do carro: ')

var carro = {} //cria objeto carro em branco 
carro.corCarro = corCarro //instancia propriedade cor no carro
carro.modeloCarro = modeloCarro //instancia propriedade modelo no carro 
carro.marcaCarro = marcaCarro //instancia propriedade marca no carro 

console.log(carro)

var garagemCarro = 'carro.json' // caminho do arquivo json
var carroSerializado = JSON.stringify(carro) //para serializar o objeto carro 

fs.writeFileSync(garagemCarro,carroSerializado)//pasta de destino e arquivo enviado

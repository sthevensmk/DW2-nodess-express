//Importando o pacore do Express.js
const express = require("express")

//Carregando o método principal do Express (Iniciando o express)
const app = express() 

//Iniciar o servidor (porta 8080)

//O método .listen do Express inicia um servidor (A funcão .listen necessita de alguns parâmetros)
app.listen(8080, function(error) {
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor" + error);
    } else {
        console.log("Parabéns! Você iniciou seu primeiro servidor Express com Node.js");
    }

} )









// Importando o pacote do Express.js
const express = require("express");

// Carregando o método principal do Express
const app = express(); // Iniciando o Express


// Iniciando o servidor da aplicação
// Porta 8080
// O método listen do Express inicia um Servidor
app.listen(8080, function(error){
    if(error){
        console.log("Ocorreu erro ao iniciar!"+ error)
    }else{
        console.log("Iniciação ocorreu com sucesso!")
    }
})




























































































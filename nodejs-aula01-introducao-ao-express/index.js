// Importando o pacote do Express.js
const express = require("express");

// Carregando o método principal do Express
const app = express(); // Iniciando o Express

// CONFIGURANDO O VIEW ENGINE - EJS
app.set("view engine", "ejs");

// CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
// Método .get cria uma rota na aplicação
// REQ -> Trata a requisisão
// RES -> Trata a Resposta
app.get("/", (req, res) => {
  res.send(
    "<h1>Bem-vindo ao meu primeiro site em Node.js!</h1><br><p>Iniciando estudos com Node.js!</p>"
  );
});

// ROTA DE PERFIL
// :nome -> Parâmetro obrigatório
// :nome? -> Parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  // res.send("<h1>Perfil do usuário</h1>")

  // Coletando o parâmetro da rota e gravando na variável
  const nome = req.params.nome;

  if (nome) {
    res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
  } else {
    res.send(`<h2>Faça login para acessar o perfil!</h2>`);
  }
});

//ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.render("produtos");
});

// Iniciando o servidor da aplicação
// Porta 8080
// O método listen do Express inicia um Servidor
app.listen(8081, (error) => {
  if (error) {
    console.log("Ocorreu erro ao iniciar!" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

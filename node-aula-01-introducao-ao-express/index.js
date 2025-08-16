//Importando o pacote do Express.js
const express = require("express");
// Carregando o método principal do Express
const app = express(); // Iniciando o express
//CONFIGURANDO A VIEW ENGINE EJS
app.set('view engine', 'ejs');

//CRIANDO A ROTA PRINCIPAL (RAIZ) DO SITE
//MÉTODO .GET CRIA UMA ROTA NA APLICAÇÃO
//REQ - TRATA A REQUISIÇÃO ----- RES - TRATA A RESPOSTA
app.get("/", (req, res) => {
  res.send(
    "<h1>Bem-Vindo ao meu primeiro site em Node.js!</h1><br><p>Iniciando estudos com Node.js</p>"
  );
});

// ROTA DE PERFIL (/:parametro)(? - torna o parametro opinicional)
app.get("/perfil/:nome?", (req, res) => {
  // COLETANDO O PARAMETRO DA ROTA E GRAVANDO NA VARIÁVEL
  // res.send("<h1>Perfil do Usuário!</h1>");
  const nome = req.params.nome;
  if (nome) {
    res.send(`<h2>Olá, ${nome}! Seja bem-vindo ao seu perfil!</h2>`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil!</h2>`);
  }
});

app.get("/produtos", (req,res) => {
    res.render("produtos")
})






















// Iniciando o servidor da aplicação na porta 8080
// Método listen no express inicia um servidor
app.listen(8080, function (error) {
  if (error) {
    console.log("Ocorreu um erro ao iniciar o servidor" + error);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});

// npm install nome-da-biblioteca
// npm install express
// npm init
// npm init -y
// node index.js
// site.com/produtos
// site.com/servicos
// .gitignore > faz o git ignorar os arquivos que são informados dentro dele
// npx > para executar
// npm install ejs

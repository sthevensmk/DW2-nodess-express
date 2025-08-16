import express from "express";
// Carregando o método do express para gerenciamento de rotas
const router = express.Router();

// ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {

  //Array de objetos
  const produtos = [
    { nome: "Celular Motorole E22", preco: 1200, categoria: "Eletroportáteis" },
    { nome: "Tablet Samsung", preco: 900, categoria: "Eletrônicos" },
    { nome: "Notebook Lenovo", preco: 3200, categoria: "Computadores" },
    { nome: "Fone Bluetooth", preco: 150, categoria: "Periféricos" },
  ];

  res.render("produtos", {
    // Enviando variáveis produto para a página
    produtos: produtos,
  });
});

// Exportando o módulo
export default router;
// pra mais um de um módulo - export default { teste1, exemplo1 };
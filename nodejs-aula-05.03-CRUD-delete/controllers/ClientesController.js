import express from "express";
const router = express.Router();
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // FAzendo um select all na tabela de clientes
  // findAll() Retorna uma promisse
  Cliente.findAll().then(clientes => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch(error => {
      console.log(error);
    });
});

// Rota de CADASTRO de novos clientes
router.post("/clientes/create", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.nome;
  const endereco = req.body.endereco;
  
  //Enviando dados para o banco
  Cliente.create({
    nome : nome,
    cpf : cpf,
    endereco : endereco,
  }).then(() => {
    console.log("Registro cadastrado com sucesso");
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  });
})

// ROTA de EXCLUSÃO de clientes
router.get("/clientes/delete/:id", (req,res) => {
  // Coletando o parametro ID da rota
  const id = req.params.id;
  Cliente.destroy({
    where : {
      id : id
    }
  }).then(() => {
    console.log("Cliente excluído com sucesso!");
    res.redirect("/clientes");
  }).catch(error => {
    console.log(error);
  })

})
export default router;
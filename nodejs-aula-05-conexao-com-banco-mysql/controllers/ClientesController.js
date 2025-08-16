import express from "express";
const router = express.Router();
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  // FAzendo um select all na tabela de clientes
  // findAll() Retorna uma promisse
  Cliente.findAll().then((clientes) => {
      res.render("clientes", {
        clientes: clientes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;

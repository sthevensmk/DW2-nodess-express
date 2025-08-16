import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

//Criando o model (tabela no banco)
const Cliente = connection.define('clientes', {
    //Colunas da tabela
    nome: {
        // Tipo do dado
        type: Sequelize.STRING,
        // Permite Vazio?
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
});
// Forçe = false, não força a criação da tabela caso ela exista
Cliente.sync({force:false});
export default Cliente;
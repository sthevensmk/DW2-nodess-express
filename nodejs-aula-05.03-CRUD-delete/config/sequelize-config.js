//Importando o sequelize
import Sequelize from "sequelize";

// Criando os dados da conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    //Comente a linha abaixo na primeira exec do projeto, para não dar erro pois o BD ainda não foi criado.
    database: 'sistemaLoja',
    timezone: "-03:00"
});
export default connection;
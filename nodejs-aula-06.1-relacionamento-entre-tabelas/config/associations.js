import { ForeignKeyConstraintError } from "sequelize";
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

// Definindo as relações entre os Models
const defineAssociations = () => {
    // Um cliente possui muitos Pedidos
    Cliente.hasMany(Pedido, { ForeignKey: "cliente_id"});
    // Um Pedido pertence a um Cliente
    Pedido.belongsTo(Cliente, { ForeignKey: "cliente_id" });
};
export default defineAssociations;








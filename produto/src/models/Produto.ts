import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Produto extends Model {
    public id!: number;
    public nome!: string;
    public descricao!: string;
    public preco!: number;
    public estoque!: number;
}

Produto.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: "produto",
    timestamps: false
});

export default Produto;
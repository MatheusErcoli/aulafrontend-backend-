import { Request, Response } from "express";
import Produto from "../models/Produto";

class ProdutoController {

    static async findAll(req: Request, res: Response) {
        const produtos = await Produto.findAll();

        res.json(produtos);
    }

    static async findById(req: Request, res: Response) {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const produto = await Produto.findByPk(id);
        
        res.json(produto);
    }

    static async create(req: Request, res: Response) {
        const { nome, descricao, preco, estoque } = req.body;

        const produto = await Produto.create({ nome, descricao, preco, estoque });
        
        res.json(produto);
    }

}

export default ProdutoController;
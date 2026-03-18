import express from "express";
import "dotenv/config";
import ProdutoController from "./controllers/produto.controller";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API de Produtos");
});

app.get("/produtos", ProdutoController.findAll);
app.get("/produtos/:id", ProdutoController.findById);
app.post("/produtos", ProdutoController.create);

export default app;
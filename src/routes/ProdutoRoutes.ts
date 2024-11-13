import { Router } from "express";
import { getProdutos, createProduto, updateProduto, deleteProduto } from "./../controllers/ProdutoController";

const router = Router();

// Rota para listar todos os produtos
router.get('/produtos', getProdutos);

// Rota para criar um novo produto
router.post('/produtos', createProduto);

// Rota para atualizar um produto específicox
router.put('/produtos/:id', updateProduto); // Adicionando o :id para especificar o produto

// Rota para excluir um produto específico
router.delete('/produtos/:id', deleteProduto); // Adicionando o :id para especificar o produto

export default router;

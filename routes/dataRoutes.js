const express = require("express");
const router = express.Router();
const { getData, createData } = require("../models/dataModel");

// Rota para obter dados
router.get("/", async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

// Rota para adicionar dados
router.post("/", async (req, res) => {
  try {
    const { label, value } = req.body;
    await createData(label, value);
    res.status(201).json({ message: "Dados inseridos com sucesso" });
  } catch (error) {
    console.error("Erro ao inserir dados:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
});

module.exports = router;

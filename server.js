const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dataRoutes = require("./routes/dataRoutes");
const db = require("./config/dbConfig");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use("/api/data", dataRoutes);

// Inicialização do servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

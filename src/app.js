// app.js: monta a aplicação Express (rotas, middlewares).
// Quem liga o servidor é o server.js. Separar os dois facilita testes e o deploy.
import express from "express";

const app = express();

// Permite receber JSON no corpo das requisições (usaremos no próximo encontro)
app.use(express.json());

// Rota de saúde: usada por serviços de nuvem para saber se a API está viva
app.get("/health", (req, res) => {
  res.json({ status: "ok", horario: new Date().toISOString() });
});

// Rota raiz: apresenta a API
app.get("/", (req, res) => {
  res.json({
    nome: "API do meu projeto",
    versao: "0.1.0",
    rotas: ["GET /health"],
  });
});

// Lista
app.get("/api/chamados", (req, res) => {
  res.json(chamados);
});

app.get("/api/modalidades", (req, res) => {
  res.json(modalidades);
});

app.get("/api/modalidades/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const modalidade = modalidades.find((m) => m.id === id);
  if (modalidade) {
    return res.json(modalidade);
  } else {
    return res.status(404).json({ error: "Modalidade não encontrada" });
  }
});

app.get("/api/turmas", (req, res) => {
  res.json(turmas);
});

app.get("/api/turmas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const turma = turmas.find((m) => m.id === id);
  if (turma) {
    return res.json(turma);
  } else {
    return res.status(404).json({ error: "Turma não encontrada" });
  }
});

app.get("/api/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: "Usuário não encontrado" });
  }
});

export default app;

const express = require("express");
const router = express.Router();

let news = [
  { id: 1, title: "Reciclarea plasticului", content: "Plasticul se colectează separat..." },
  { id: 2, title: "Colectarea sticlei", content: "Depozitarea sticlei la containere verzi..." }
];

// public: lista de articole
router.get("/news", (req, res) => {
  res.json(news);
});

// public: articol după id
router.get("/news/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const article = news.find(n => n.id === id);
  if (!article) return res.status(404).json({ error: "Articol inexistent" });
  res.json(article);
});

module.exports = router;

const express = require("express");
const router = express.Router();

// --- simularea a niște date ---
let news = [
  { id: 1, title: "Reciclarea plasticului", content: "Plasticul trebuie colectat separat." },
  { id: 2, title: "Campanie sticlă", content: "Sticla se depune în containerele verzi." }
];

let workers = [
  { id: 1, name: "Ion Popescu", active: true },
  { id: 2, name: "Maria Ionescu", active: true }
];

// --- middleware roluri ---
function checkRole(requiredRole) {
  return (req, res, next) => {
    const userRole = req.headers["role"]; // ex: role=admin
    if (userRole !== requiredRole) {
      return res.status(403).json({ error: "Access forbidden" });
    }
    next();
  };
}

// --- gestionare articole/news ---
router.post("/news", checkRole("admin"), (req, res) => {
  const { title, content } = req.body;
  const newArticle = { id: news.length + 1, title, content };
  news.push(newArticle);
  res.status(201).json(newArticle);
});

router.delete("/news/:id", checkRole("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  news = news.filter(n => n.id !== id);
  res.json({ message: `Articolul ${id} a fost șters.` });
});

// --- gestionare lucrători ---
router.put("/workers/ban/:id", checkRole("admin"), (req, res) => {
  const id = parseInt(req.params.id);
  const worker = workers.find(w => w.id === id);
  if (!worker) return res.status(404).json({ error: "Worker not found" });

  worker.active = false;
  res.json({ message: `${worker.name} a fost banat.` });
});

// --- rapoarte ---
router.get("/reports", checkRole("admin"), (req, res) => {
  res.json({
    workersActive: workers.filter(w => w.active).length,
    newsCount: news.length,
    message: "Raport generat cu succes."
  });
});

module.exports = router;

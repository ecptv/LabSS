const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Produs A", price: 10 },
  { id: 2, name: "Produs B", price: 20 },
  { id: 3, name: "Produs C", price: 30 },
  { id: 4, name: "Produs D", price: 40 },
  { id: 5, name: "Produs E", price: 50 },
  { id: 6, name: "Produs F", price: 60 },
  { id: 7, name: "Produs G", price: 70 },
  { id: 8, name: "Produs H", price: 80 },
  { id: 9, name: "Produs I", price: 90 },
  { id: 10, name: "Produs J", price: 100 }
];

// Nivel 5: lista
router.get("/list", (req, res) => {
  res.json(products);
});

// Nivel 6: detalii după id
router.get("/details/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) return res.status(404).json({ error: "Not found" });
  res.json(product);
});

// Nivel 8: căutare
// GET /products/search?name=telefon
router.get("/search", (req, res) => {
  const { name } = req.query;
  let result = products;

  if (name) {
    result = result.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }

  res.json(result);
});




module.exports = router;

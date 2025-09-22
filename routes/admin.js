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

// Middleware roluri
function checkRole(role) {
  return (req, res, next) => {
    const userRole = req.headers["role"];
    if (userRole !== role) {
      return res.status(403).json({ error: "Access forbidden" });
    }
    next();
  };
}

// Nivel 9: editare
router.put("/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const index = products.findIndex(p => p.id === id);

  if (index === -1) return res.status(404).json({ error: "Not found" });

  products[index] = { id, name, price };
  res.json({ success: true, product: products[index] });
});

// Nivel 10: raport accesibil doar Admin
function checkRole(requiredRole) {
  return (req, res, next) => {
    const userRole = req.headers["role"]; // citim header-ul "role"

    if (userRole !== requiredRole) {
      return res.status(403).json({ error: "Access forbidden" });
    }

    next(); // dacă rolul e corect → continuă
  };
}

// ruta /reports doar pentru admin
router.get("/reports", checkRole("admin"), (req, res) => {
  res.json({ message: "Raport accesat cu succes" });
});

module.exports = router;

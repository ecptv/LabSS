const express = require("express");
const router = express.Router();

// Info general
router.get("/info", (req, res) => {
  res.json({
    company: "Reciclare SRL",
    description: "Colectăm și reciclăm plastic, sticlă și metal pentru un viitor verde."
  });
});

// FAQ
router.get("/faq", (req, res) => {
  res.json([
    { q: "Cum predau plasticul?", a: "Puteți aduce la centrele noastre sau programa ridicarea." },
    { q: "Colectați și metal?", a: "Momentan nu, doar plastic, sticlă și hârtie." }
  ]);
});

// Contact
router.get("/contacts", (req, res) => {
  res.json({
    email: "contact@reciclare.md",
    phone: "+373 600 123 456",
    address: "Chișinău, bd. Ștefan cel Mare 100"
  });
});

module.exports = router;

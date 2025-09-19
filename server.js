const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


app.use(express.json());

// Lista statică (Nivel 5)
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

// Nivel 5: GET /list
app.get("/list", (req, res) => {
  res.json(products);
});
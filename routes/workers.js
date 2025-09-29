const express = require("express");
const router = express.Router();

// program personalizat
router.get("/schedule", (req, res) => {
  res.json({
    worker: "Ion Popescu",
    schedule: "Luni - Vineri, 08:00 - 16:00"
  });
});

// politici HR
router.get("/hr", (req, res) => {
  res.json({
    rules: [
      "Echipamentul de protecție este obligatoriu.",
      "Respectați orele de lucru și pauzele stabilite.",
      "Raportați incidentele imediat."
    ]
  });
});

module.exports = router;
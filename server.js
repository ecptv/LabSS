const express = require("express");
const app = express();
const port = 3000;

// middleware pentru body JSON
app.use(express.json());

//rutele
const productsRoutes = require("./routes/products");
const adminRoutes = require("./routes/admin");

// modulele
app.use("/products", productsRoutes);
app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

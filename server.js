const express = require("express");
const app = express();
const port = 3000;

// middleware pentru body JSON
function checkRole(requiredRole) {
  return (req, res, next) => {
    const userRole = req.headers["role"]; 

    if (userRole !== requiredRole) {
      return res.status(403).json({ error: "Access forbidden" });
    }

    next(); 
  };
}

module.exports = checkRole;


//rutele
const productsRoutes = require("./routes/products");
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/users");
const workerRoutes = require("./routes/workers");

// modulele
app.use("/products", productsRoutes);
app.use("/admin", adminRoutes);
app.use("/users", userRoutes);
app.use("/workers", workerRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

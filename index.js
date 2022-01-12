const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production"){
  require("dotenv").config();
}

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/api/Auth", require("./Controllers/AuthController"));

// Server
app.listen(app.get("port"), () => {});

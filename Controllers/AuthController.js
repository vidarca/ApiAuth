const express = require("express");
const authService = require("../Layers/Service/Services/AuthServices");
const router = express.Router();

router.post("/Login", async (req, res) => {
  try {
    const userAuth = { username, password, email } = req.body;
    res.json(await authService.Login(userAuth));
  } catch (error) {
    res.status(error.status ?? 500).json(error.message ? error : "Internal server error.");
  }
});

router.post("/Logout", async (req, res) => {
  try {
    const bearer = req.headers.autheticate;
    await authService.Logout(bearer);
    res.json(null);
  } catch (error) {
    res.status(error.status ?? 500).json(error.message ? error : "Internal server error.");
  }
});

module.exports = router;

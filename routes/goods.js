const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("라우터 개시!");
});

router.get("/about", (req, res) => {
  res.send("goods.js about PATH");
});

module.exports = router;

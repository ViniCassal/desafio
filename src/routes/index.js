const express = require('express');
const router = express.Router();
const indexController = require("../controller/indexController")

router.get("/", indexController.index);
router.post("/desafio", indexController.salvar);
module.exports = router;
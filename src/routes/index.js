const express = require('express');
const router = express.Router();
const indexController = require("../controller/indexController")
const desafioController = require("../controller/desafiocontroller")

router.get("/", indexController.viewHome);
router.post("/desafio", desafioController.createMessage);
module.exports = router;
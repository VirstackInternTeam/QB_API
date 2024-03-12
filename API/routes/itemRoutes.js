
const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemController.js");

router.get("/items", itemsController.getItems);

module.exports = router;

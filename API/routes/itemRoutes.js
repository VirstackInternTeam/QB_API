const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemController.js");

//Get all items router
router.get("/items", itemsController.getItems);

module.exports = router;

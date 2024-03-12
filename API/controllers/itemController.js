const itemsModel = require("../models/itemsModel");

const getItems = async (req, res) => {
  try {
    const items = await itemsModel.readItems();
    res.json(items);
  } catch (error) {
    res.status(500).send("Error");
  }
};

module.exports = { getItems };

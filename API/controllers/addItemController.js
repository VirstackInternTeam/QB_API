const axios = require("axios");
const itemModel = require("../models/AddItemModel.js");
const config = require("../configurations/config.js");

const createItem = async () => {
  try {
    const response = await axios.post(
      `${config.baseUrl}/v3/company/${config.companyId}/item?minorversion=${config.minorVersion}`,
      itemModel,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${global.accessToken}`,
        },
      }
    );

    console.log("Item created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating item:", error.response.data);
    throw error;
  }
};

module.exports = { createItem };

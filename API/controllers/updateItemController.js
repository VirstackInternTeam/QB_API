const axios = require("axios");
const config = require("../configurations/config.js");
const itemModel = require("../models/updateItemModel.js");

const updateItem = async () => {
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
    console.log("Item updated successfully:", response.data);
    return response.data;
 } catch (error) {
    console.error("Error updating item:", error.response.data);
 }
};

module.exports = { updateItem };

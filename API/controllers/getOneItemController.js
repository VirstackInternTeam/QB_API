const config = require("../configurations/config.js");
const axios = require("axios");

const readItem = async (itemId) => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/v3/company/${config.companyId}/item/${itemId}?minorversion=${config.minorVersion}`,
      {
        headers: {
          Authorization: `Bearer ${global.accessToken}`,
        },
      }
    );

    console.log("Item retrieved successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error retrieving item:",
      error.response ? error.response.data : error.message
    );
  }
};

module.exports = { readItem };

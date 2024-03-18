const axios = require("axios");
const config = require("../configurations/config");

const readItems = async () => {
  try {
    const response = await axios.get(
      `${config.baseUrl}/v3/company/${config.companyId}/query?query=select * from Item&minorversion=${config.minorVersion}`,
      {
        headers: {
          Authorization: `Bearer ${global.accessToken}`,
        },
      }
    );

    const filterItems = response.data.QueryResponse.Item.map((item) => ({
      name: item.Name,
      id: item.Id,
      type: item.Type,
    }));

    return filterItems;
  } catch (error) {
    console.error("Error retrieving item:", error.response.data);
    throw error;
  }
};

module.exports = { readItems };

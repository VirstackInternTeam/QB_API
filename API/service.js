const {
  accessToken,
  companyId,
  minorVersion,
} = require("../API/constrains/settings.js");
const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const readItems = async (companyId, minorVersion, accessToken) => {
  try {
    const response = await axios.get(
      `https://sandbox-quickbooks.api.intuit.com/v3/company/${companyId}/query?query=select * from Item&minorversion=${minorVersion}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const filterItems = response.data.QueryResponse.Item.map((item) => ({
      name: item.Name,
      id: item.Id,
      type: item.Type,
    }));

    console.log("Item retrieved successfully:", filterItems);
    return filterItems;
  } catch (error) {
    console.error("Error retrieving item:", error.response.data);
  }
};
app.get("/items", async (req, res) => {
  try {
    const items = await readItems(companyId, minorVersion, accessToken);
    res.json(items);
  } catch (error) {
    res.status(500).send("Error");
  }
});

app.listen(port, () => {
  console.log(`App is running at http://${port}`);
});

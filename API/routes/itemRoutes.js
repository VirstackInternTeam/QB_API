const express = require("express");
const router = express.Router();
const getAllItemsController = require("../controllers/getAllitemController.js");
const addItemController = require("../controllers/addItemController.js");
const readItemController = require("../controllers/getOneItemController.js");
const updateitemController = require("../controllers/updateItemController.js");
const OAuthClient = require("intuit-oauth");
const config = require("../configurations/config.js");

global.accessToken = null;

const oauthClient = new OAuthClient({
  clientId: "ABQbmpABzaiprzSrSEWv1k4M5ft1cogxAMb4iqHkrXPcia1irI",
  clientSecret: "oYY127Np8hVceFBWPMqKrIHFWlJXVd5gSueg00sp",
  environment: "sandbox",
  redirectUri: config.redirectUri,
});

//Get all items
router.get("/items", getAllItemsController.getItems);

//Create an Item
router.get("/createItem", addItemController.createItem);

//Get an Item
router.get("/readItem/:itemId", async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const result = await readItemController.readItem(itemId);
    res.status(200).json(result);
  } catch (error) {
    if (error.response) {
      res.status(500).json({ error: error.response.data });
    } else {
      res
        .status(500)
        .json({ error: "Error retrieving item", details: error.message });
    }
  }
});

//Update an Item
router.get("/updateItem", updateitemController.updateItem);



router.get("/callback", (req, res) => {
  const parseRedirect = req.url;
  //console.log(parseRedirect);
  // Exchange the auth code retrieved from the **req.url** on the redirectUri
  oauthClient
    .createToken(parseRedirect)
    .then(function (authResponse) {
      console.log(authResponse);
      global.accessToken = authResponse.token.access_token;
      //console.log(access_token);
      res.send("ok");
    })
    .catch(function (e) {
      res.send(e);
    });
});

router.get("/test", (req, res) => {
  const authUri = oauthClient.authorizeUri({
    scope: [OAuthClient.scopes.Accounting, OAuthClient.scopes.OpenId],
    state: "testState",
  });
  res.send(authUri);
});

module.exports = router;

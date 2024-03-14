const express = require("express");
const router = express.Router();
const itemsController = require("../controllers/itemController.js");
const OAuthClient = require("intuit-oauth");
const { accessToken } = require("../configurations/config.js");
global.accessToken = null;

const oauthClient = new OAuthClient({
  clientId: "ABQbmpABzaiprzSrSEWv1k4M5ft1cogxAMb4iqHkrXPcia1irI",
  clientSecret: "oYY127Np8hVceFBWPMqKrIHFWlJXVd5gSueg00sp",
  environment: "sandbox",
  redirectUri: "https://society-juan-pi-jack.trycloudflare.com/callback",
});

//Get all items router
router.get("/items", itemsController.getItems);

router.get("/callback", (req, res) => {
  const parseRedirect = req.url;
  //console.log(parseRedirect);
  // Exchange the auth code retrieved from the **req.url** on the redirectUri
  oauthClient
    .createToken(parseRedirect)
    .then(function (authResponse) {
      //console.log(authResponse.token);
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

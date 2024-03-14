// const axios = require("axios");
// const qs = require("querystring");
// const config = require("../configurations/config");
// //global.accessToken = null;
// // global.refreshToken = "AB11719117599vbT3fZtYNaeHWdFYFgTYeepYPgkSuYOek34zh";

// //Function to grab the updated data
// async function refreshToken() {
//   const url = "https://oauth.platform.intuit.com/oauth2/v1/tokens/bearer";
//   const data = qs.stringify({
//     grant_type: "refresh_token",
//     refresh_token: global.refresh_token,
//     client_id: config.clientID,
//     client_secret: config.clientSecret,
//   });

//   try {
//     const response = await axios.post(url, data, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error refreshing access token:", error);
//     return null;
//   }
// }

// //check and refresh the refresh token
// async function RefreshTokenR(req, res, next) {
//   const isValid = false;

//   if (!isValid) {
//     const newTokenResponse = await refreshToken();
//     if (newTokenResponse) {
//       global.refreshToken = newTokenResponse.refresh_token;
//       console.log("Refresh token refreshed successfully");
//     } else {
//       console.error("Failed to refresh refresh token");
//       return res.status(500).send("Failed to refresh refresh token");
//     }
//   }

//   next();
// }

// //check and refresh the access token
// async function RefreshTokenA(req, res, next) {
//   const isValid = false;

//   if (!isValid) {
//     const newTokenResponse = await refreshToken();
//     if (newTokenResponse) {
//       global.accessToken = newTokenResponse.access_token;
//       // console.log(newTokenResponse);
//       console.log("Access token refreshed successfully");
//     } else {
//       console.error("Failed to refresh access token");
//       return res.status(500).send("Failed to refresh access token");
//     }
//   }

//   next();
// }

// module.exports = {
//   RefreshTokenR,
//   RefreshTokenA,
// };

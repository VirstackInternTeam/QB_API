// const axios = require("axios");
// const config = require("../configurations/config");

// //use this Json to create Item
// const createItem = async () => {
//   const item = {
//     TrackQtyOnHand: true,
//     Name: "NewProc",
//     QtyOnHand: 10,
//     IncomeAccountRef: {
//       name: "Sales of Product Income",
//       value: "79",
//     },
//     AssetAccountRef: {
//       name: "Inventory Asset",
//       value: "81",
//     },
//     InvStartDate: "2015-01-01",
//     Type: "Inventory",
//     ExpenseAccountRef: {
//       name: "Cost of Goods Sold",
//       value: "80",
//     },
//   };

//   try {
//     const response = await axios.post(
//       `${config.baseUrl}/v3/company/${config.companyId}/item?minorversion=${config.minorVersion}`,
//       item,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${config.accessToken}`,
//         },
//       }
//     );

//     console.log("Item created successfully:", response.data);
//     return response.data; 
//   } catch (error) {
//     console.error("Error creating item:", error.response.data);
//     throw error;
//   }
// };

// module.exports = { createItem };

//https://sandbox-quickbooks.api.intuit.com/v3/company/{companyId}/item?minorversion={minorVersion}

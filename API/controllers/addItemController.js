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

/*
ADD ITEM
TOKEN:Bearer Token
API:https://sandbox-quickbooks.api.intuit.com/v3/company/9130357960426596/item?minorversion=70
REQUEST BODY:
{
 "TrackQtyOnHand": true,
 "Name": "ComputerNew1",
 "QtyOnHand": 10,
 "IncomeAccountRef": {
    "name": "Sales of Product Income",
    "value": "79"
 },
 "AssetAccountRef": {
    "name": "Inventory Asset",
    "value": "81"
 },
 "InvStartDate": "2015-01-01",
 "Type": "Inventory",
 "ExpenseAccountRef": {
    "name": "Cost of Goods Sold",
    "value": "80"
 }
}



UPDATE ITEM:
TOKEN:Bearer Token
API:https://sandbox-quickbooks.api.intuit.com/v3/company/9130357960426596/item?minorversion=70
REQUEST BODY:
{
    "FullyQualifiedName": "Rock Fountain", 
    "domain": "QBO", 
    "Id": "5", 
    "Name": "Rock Fountain", 
    "TrackQtyOnHand": true, 
    "Type": "Inventory", 
    "PurchaseCost": 125, 
    "QtyOnHand": 2, 
    "IncomeAccountRef": {
      "name": "Sales of Product Income", 
      "value": "79"
    }, 
    "AssetAccountRef": {
      "name": "Inventory Asset", 
      "value": "81"
    }, 
    "Taxable": true, 
    "MetaData": {
      "CreateTime": "2014-09-16T10:42:19-07:00", 
      "LastUpdatedTime": "2014-09-19T13:16:17-07:00"
    }, 
    "sparse": false, 
    "Active": true, 
    "SyncToken": "2", 
    "InvStartDate": "2014-09-19", 
    "UnitPrice": 275, 
    "ExpenseAccountRef": {
      "name": "Cost of Goods Sold", 
      "value": "80"
    }, 
    "PurchaseDesc": "Rock Fountain", 
    "Description": "New, updated description for Rock Fountain"
  }
  */

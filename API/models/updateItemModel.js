//all fileds are required in QB uanable to remove unwanted fields
module.exports = {
  FullyQualifiedName: "oooooooo",
  domain: "QBO",
  Id: "5",
  Name: "Rock F",
  TrackQtyOnHand: true,
  Type: "Inventory",
  PurchaseCost: 500,
  QtyOnHand: 2,
  IncomeAccountRef: {
    name: "Sales of Product Income",
    value: "79",
  },
  AssetAccountRef: {
    name: "Inventory Asset",
    value: "81",
  },
  Taxable: true,
  MetaData: {
    CreateTime: "2014-09-16T10:42:19-07:00",
    LastUpdatedTime: "2014-09-19T13:16:17-07:00",
  },
  sparse: false,
  Active: true,
  SyncToken: "4",//need to put sinktoken to obtain sink token i created readItem
  InvStartDate: "2014-09-19",
  UnitPrice: 275,
  ExpenseAccountRef: {
    name: "Cost of Goods Sold",
    value: "80",
  },
  PurchaseDesc: "Rock Fountain",
  Description: "New, updated description for Rock Fountain",
};

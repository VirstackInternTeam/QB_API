const express = require("express");
const itemsRoutes = require("./routes/itemRoutes");

const app = express();
const port = 3000;
app.use(express.json());

app.use("/", itemsRoutes);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});

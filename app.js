const express = require("express");
require("dotenv").config();
const pages = require("./routes/routes");

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", pages);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

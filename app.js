const express = require("express");
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
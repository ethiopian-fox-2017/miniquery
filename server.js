const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const index = require("./routes/index");

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("lib"));

app.use("/", index);

app.listen(3000, () => {
  console.log(`Server listened!`);
})

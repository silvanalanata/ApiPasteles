const express = require("express");
const app = express();

const cors = require('cors')
app.use(cors());

const mongoose = require("./config/mongoose");
const router = require("./config/routes");

app.use(router);



app.listen(8000, function () {
  console.log("servidor ejecutandose en  http://localhost:8000");
});



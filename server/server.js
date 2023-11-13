const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;
app.use(express.json());

const mongoose = require("mongoose");
const Deal = require("./models/deal");
mongoose.connect(process.env.DATABASE_URL);

app.get("/results", async (request, response) => {
  const results = await Deal.find(request.query);
  response.json(results);
});

app.get("/results/:id", async (request, response) => {
  const result = await Deal.findById(request.params.id);
  response.json(result);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

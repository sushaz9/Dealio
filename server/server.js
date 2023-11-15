const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
const PORT = 8080;
app.use(express.json());
const axios = require("axios");

const mongoose = require("mongoose");
const Deal = require("./models/deal");
mongoose.connect(process.env.DATABASE_URL);

app.get("/map", async (request, response) => {
  const { address } = request.query;

  const API_location = `https://eu1.locationiq.com/v1/search?q=${address}&key=${process.env.LOCATION_KEY}&format=json`;

  const res_location = await axios.get(API_location);
  const wrangledData = {
    display: res_location.data[0].display_name,
    latitude: res_location.data[0].lat,
    longitude: res_location.data[0].lon,
  };
  response.json(wrangledData);
});

app.get("/results", async (request, response) => {
  try {
    const deals = await Deal.find(request.query);
    response.json(deals);
  } catch (error) {
    console.log(error);
    response.status(404).json("404 Deal Not Found");
  }
});

app.post("/results", async (request, response) => {
  try {
    const newDeal = await Deal.create(request.body);
    response.json(newDeal);
  } catch (error) {
    console.log(error);
    response.status(418).json("418 I'm a Teapot");
  }
});

app.delete("/results/:id", async (request, response) => {
  try {
    const deletedDeal = await Deal.findByIdAndDelete(request.params.id);
    response.json(deletedDeal);
  } catch (error) {
    console.log(error);
    response.status(418).json("418 I'm a Teapot");
  }
});

app.put("/results/:id", async (request, response) => {
  try {
    const updatedDeal = await Deal.findByIdAndUpdate(
      request.params.id,
      request.body
    );
    response.json(updatedDeal);
  } catch (error) {
    console.log(error);
    response.status(418).json("418 I'm a Teapot");
  }
});

app.get("/results/:id", async (request, response) => {
  const result = await Deal.findById(request.params.id);
  response.json(result);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

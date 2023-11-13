const mongoose = require("mongoose");
require("dotenv").config();
const Deal = require("./models/deal");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Deal.create([
    {
      businessName: "Savor Delights",
      offer: "Buy One Get One Free",
      discountDay: "Wednesday",
      voucher: true,
      location: "Liverpool",
      category: "Cuisine Fusion",
      businessImage: "https://loremflickr.com/600/600/restaurant",
      logoImage: "https://loremflickr.com/400/400/logo,restaurant",
    },
    {
      businessName: "Tasty Bites",
      offer: "Happy Hour Specials",
      discountDay: "Wednesday",
      voucher: true,
      location: "Liverpool",
      category: "Fine Dining",
      businessImage: "https://loremflickr.com/600/600/restaurant,italian",
      logoImage: "https://loremflickr.com/400/400/logo,restaurant",
    },
    {
      businessName: "Sizzle Grill",
      offer: "Weekend Feast",
      discountDay: "Saturday",
      voucher: false,
      location: "Liverpool",
      category: "Grill & BBQ",
      businessImage: "https://loremflickr.com/600/600/restaurant",
      logoImage: "https://loremflickr.com/400/400/logo,restaurant",
    },
  ]);

  console.log("Deal created");
  mongoose.disconnect();
}

seed();

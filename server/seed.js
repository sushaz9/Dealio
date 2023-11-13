const mongoose = require("mongoose");
require("dotenv").config();
const Deal = require("./models/deal");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Deal.create([
    {
      businessName: "Pizza Hut",
      offer: "50% off when you spend £25 or more",
      discountDay: "Tuesday",
      voucher: true,
      location: "UK wide",
      category: "Fast food",
      businessImage:
        "https://www.verdictfoodservice.com/wp-content/uploads/sites/17/2020/09/shutterstock_1150633349.jpg",
      logoImage: "https://logowik.com/content/uploads/images/130_pizzahut.jpg",
    },
    {
      businessName: "Almost Famous",
      offer: "Weekday £10 Burger & Fries 12 pm - 4 pm",
      discountDay: "Monday to Friday",
      voucher: false,
      location: "11-13 Parr Street, Liverpool, L1 4JN",
      category: "Restaurant",
      businessImage:
        "https://www.tagvenue.com/resize/a8/f1/widen-1680-noupsize;15710-almost-famous-liverpool-venue.jpeg",
      logoImage:
        "https://static.wixstatic.com/media/08f7bc_a44ae6d1e1a94fbcb7db5bc30f964135~mv2.png/v1/crop/x_1,y_0,w_930,h_615/fill/w_418,h_277,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/08f7bc_a44ae6d1e1a94fbcb7db5bc30f964135~mv2.png",
    },
    {
      businessName: "Maray",
      offer: "2 dine for £40",
      discountDay: "4 - 6pm Tuesday - Friday & All Day Sunday",
      voucher: false,
      location: "Liverpool",
      category: "Middle Eastern Inspired Street Food",
      businessImage:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/37/ec/c4/maray-is-a-fabulously.jpg",
    },
  ]);

  console.log("Deal created");
  mongoose.disconnect();
}

seed();

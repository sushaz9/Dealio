const mongoose = require("mongoose");
require("dotenv").config();
const Deal = require("./models/deal");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Deal.create([
    {
      businessName: "Maray",
      offer: "2 dine for £40",
      discountDay: "Weekday",
      voucher: false,
      location: "Liverpool",
      category: "Street food",
      address: "91 Bold Street Liverpool L1 4HF",
      businessImage:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/37/ec/c4/maray-is-a-fabulously.jpg",
      logoImage: "https://maray.co.uk/wp-content/uploads/Rose-icon.png",
    },
    {
      businessName: "Almost Famous",
      offer: "Weekday £10 Burger & Fries 12 pm - 4 pm",
      discountDay: "Weekday",
      voucher: false,
      location: "Liverpool",
      category: "Fast food",
      address: "11-13 Parr Street Liverpool L1 4JN",
      businessImage:
        "https://www.tagvenue.com/resize/a8/f1/widen-1680-noupsize;15710-almost-famous-liverpool-venue.jpeg",
      logoImage:
        "https://static.wixstatic.com/media/08f7bc_a44ae6d1e1a94fbcb7db5bc30f964135~mv2.png/v1/crop/x_1,y_0,w_930,h_615/fill/w_418,h_277,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/08f7bc_a44ae6d1e1a94fbcb7db5bc30f964135~mv2.png",
    },
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
      businessName: "63 Degrees",
      offer: "5 course tasting menu £45 on Tuesdays",
      discountDay: "Tuesday",
      voucher: false,
      location: "Manchester",
      category: "Fine dining",
      address: "104 High Street Northern Quarter Manchester M4 1HQ",
      businessImage:
        "https://restaurantsofmanchester.com/photos/french/63degrees-outside.jpg",
      logoImage:
        "https://restaurantsofmanchester.co.uk/photos/french/63degrees-logo500.jpg",
    },
    {
      businessName: "The River Restaurant at The Lowry Hotel",
      offer: "Sunday Lunch from £29.95",
      discountDay: "Sunday",
      voucher: false,
      location: "Manchester",
      category: "Fine dining",
      address: "The Lowry Hotel, 50 Dearmans Pl, Salford M3 5LH",
      businessImage:
        "https://www.restaurantsofmanchester.com/photos/british/riverrestaurant-restaurant.jpg",
      logoImage:
        "https://www.thelowryhotel.com/media/2294/river-restaurant.png",
    },
    {
      businessName: "Cottonopolis",
      offer:
        "Enjoy one brunch dish and bottomless drinks every weekend until 15:00",
      discountDay: "Weekend",
      voucher: false,
      location: "Manchester",
      category: "Japanese",
      address: "16 Newton Street, Manchester M1 2AE",
      businessImage:
        "https://www.manchesterbars.com/photos/cottonopolis-bar.jpg",
      logoImage:
        "https://www.cottonopolis-nq.com/wp-content/themes/cottonopolis/images/logo.svg",
    },
  ]);

  console.log("Deal created");
  mongoose.disconnect();
}

seed();

[
  {
    businessName: "Sizzle Grill",
    offer: "Weekend Feast",
    discountDay: "Saturday",
    voucher: false,
    location: "Liverpool",
    category: "BBQ",
    businessImage: "https://loremflickr.com/600/600/restaurant",
    logoImage: "https://loremflickr.com/400/400/logo,restaurant",
  },

  {
    businessName: "Savor Delights",
    offer: "Buy One Get One Free",
    discountDay: "Wednesday",
    voucher: true,
    location: "Liverpool",
    category: "Fusion",
    businessImage: "https://loremflickr.com/600/600/restaurant",
    logoImage: "https://loremflickr.com/400/400/logo,restaurant",
  },
];

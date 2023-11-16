const mongoose = require("mongoose");
require("dotenv").config();
const Deal = require("./models/deal");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  await Deal.create([
    {
      businessName: "Tonight Josephine",
      offer: "2 cocktails for £12",
      discountDay: "Weekday",
      voucher: false,
      location: "Liverpool",
      category: "Bar",
      address: "87-89 Hanover Street Liverpool L1 3DZ",
      businessImage:
        "https://i2-prod.liverpoolecho.co.uk/incoming/article25369750.ece/ALTERNATES/s615/0_Tonight-Josephine-Liverpool.jpg",
      logoImage:
        "https://www.tonightjosephine.co.uk/wp-content/uploads/2023/01/tonight-josephine.png",
    },
    {
      businessName: "Revolution Albert Dock",
      offer: "2-4-1 cocktails (time restrictions apply)",
      discountDay: "Weekday",
      voucher: false,
      location: "Liverpool",
      category: "Bar",
      address: "Unit 4M Atlantic Pavilion Albert Dock Liverpool L3 4AE",
      businessImage:
        "https://theguideliverpool.com/wp-content/uploads/2020/12/revolution-large-img1.jpg",
      logoImage:
        "https://fixr-cdn.fixr.co/images/sales_account/logo/da1832ac4f0d4366b80898395cc96160.jpeg",
    },
    {
      businessName: "Be At One",
      offer: "Happy Hour 2-4-1 (time restrictions apply)",
      discountDay: "All",
      voucher: false,
      location: "Liverpool",
      category: "Bar",
      address: "13-21 Seel Street Liverpool L1 4AU",
      businessImage:
        "https://www.spccs1.co.uk/ImageAssets/dd0c162e513b4c659866ad2a86193d0a.JPG",
      logoImage:
        "https://hospitalityrewards.co.uk/wp-content/uploads/2022/10/be-at-one-logo.png",
    },
    {
      businessName: "Revolucion de Cuba",
      offer: "2-4-1 cocktails / £3.50 pints of Mahou (time restrictions apply)",
      discountDay: "Weekday",
      voucher: false,
      location: "Liverpool",
      category: "Bar",
      address: "Unit 17 Albert Dock Liverpool L3 4AF",
      businessImage:
        "https://media-cdn.tripadvisor.com/media/photo-s/10/bf/05/16/revolucion-de-cuba-albert.jpg",
      logoImage:
        "https://downtowninbusiness.com/wp-content/uploads/2018/01/Revolucion-De-Cuba.jpg",
    },
    {
      businessName: "Bierkeller Liverpool",
      offer:
        "Madri, Tanqueray & Tonic, Prosecco - all £4 each (time restrictions apply)",
      discountDay: "Weekday",
      voucher: false,
      location: "Liverpool",
      category: "Bar",
      address: "6 Thomas Steers Way Liverpool L1 8LW",
      businessImage:
        "https://www.tagvenue.com/upload/be/f9/5912-bierkeller-hall-room.jpg",
      logoImage:
        "https://www.antreclimited.com/wp-content/uploads/2018/09/bierkeller-logo.jpg",
    },
    {
      businessName: "The Pilgrim",
      offer: "Triples £2.75",
      discountDay: "All",
      voucher: false,
      location: "Liverpool",
      category: "Pub",
      address: "34 Pilgrim Street Liverpool L1 9HB",
      businessImage:
        "https://i2-prod.liverpoolecho.co.uk/incoming/article24664064.ece/ALTERNATES/s615/1_The-Pilgrim-on-Pilgrim-Street-Liverpool-Photo-by-Colin-Lane.jpg",
      logoImage:
        "https://media-cdn.tripadvisor.com/media/photo-s/10/d2/3f/14/the-pilgrim-pub-great_rotated_90.jpg",
    },
    {
      businessName: "The Ship & Mitre",
      offer: "German bottled beers - any 4 for £18",
      discountDay: "All",
      voucher: false,
      location: "Liverpool",
      category: "Pub",
      address: "133 Dale Street Liverpool L2 2JH",
      businessImage: "https://tonightinliverpool.co.uk/images/ship3.jpg",
      logoImage:
        "https://the-ship-and-mitre.myshopify.com/cdn/shop/files/ship-logo-building_800x.jpg?v=1614313008cd ",
    },
  ]);

  console.log("Deal created");
  mongoose.disconnect();
}

seed();

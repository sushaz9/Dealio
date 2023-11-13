const mongoose = require("mongoose");
const { Schema } = mongoose;

const dealSchema = new Schema({
  businessName: String,
  offer: String,
  discountDay: String,
  voucher: Boolean,
  location: String,
  category: String,
  businessImage: String,
  logoImage: String,
});

const Deal = mongoose.model("Deal", dealSchema);
module.exports = Deal;

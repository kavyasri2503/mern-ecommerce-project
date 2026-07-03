const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: String,
  products: Array,
  totalAmount: Number,
  paymentId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: true,
    },
    customer_email: {
      type: String,
      required: true,
      unique: true,
    },
    product: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

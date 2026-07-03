const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// SAVE ORDER
router.post("/", async (req, res) => {
  try {
    const { user, products, totalAmount, paymentId } = req.body;

    const newOrder = new Order({
      user,
      products,
      totalAmount,
      paymentId,
    });

    await newOrder.save();

    res.json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ORDERS
// GET ORDERS (ALL or USER)
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});
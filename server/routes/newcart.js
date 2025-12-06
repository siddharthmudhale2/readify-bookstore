const express = require("express");
const newcart = require("../models/newcart");
const router = express.Router();

// 1. Get all cart items
router.get("/get", async (req, res) => {
  try {
    const data = await newcart.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch cart items", error: err });
  }
});

// 2. Search cart items by book name or type
router.get("/searchbook/:searchtext", async (req, res) => {
  try {
    const searchtext = req.params.searchtext.toLowerCase();
    const data = await newcart.find();
    const filtered = data.filter(item =>
      item.bname.toLowerCase().includes(searchtext) ||
      item.btype.toLowerCase().includes(searchtext)
    );
    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: "Search failed", error: err });
  }
});

// 3. Get cart items for a specific user
router.get("/getbyuserid/:userid", async (req, res) => {
  try {
    const data = await newcart.find({ userid: req.params.userid });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user cart", error: err });
  }
});

// 4. Get single cart item by ID
router.get("/get/:id", async (req, res) => {
  try {
    const item = await newcart.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Cart item not found" });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: "Error fetching cart item", error: err });
  }
});

// 5. Add a new cart item
router.post("/add", async (req, res) => {
  try {
    const item = new newcart(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
    console.log("Cart item added:", savedItem);
  } catch (err) {
    res.status(500).json({ message: "Failed to add item", error: err });
  }
});

// 6. Update payment status to "PaymentDone"
router.put("/paymentdone/:userid/:ids", async (req, res) => {
  const { userid, ids } = req.params;
  const cartIds = ids.split(",");

  try {
    for (let id of cartIds) {
      await newcart.updateOne({ _id: id }, { $set: { paymentstatus: "PaymentDone" } });
      console.log(`Updated cart ID ${id} to PaymentDone`);
    }

    res.status(200).json({ message: "Payment updated successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Payment update failed", error: err });
  }
});

module.exports = router;

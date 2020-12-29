const express = require("express");
var router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { product } = require("../../models/product");
var { newBooking } = require("../../models/newBookings");
router.get("/", async (req, res) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let products = await product.find().skip(skipRecords).limit(perPage);
  let total = await product.countDocuments();
  return res.send({ total, products });
});
router.get("/:id", async (req, res) => {
  try {
    let products = await product.findById(req.params.id);
    if (!products)
      return res.status(400).send("Product with given id is not present");
    return res.send(products);
  } catch (err) {
    return res.status(400).send("Invalid Id");
  }
});
router.put("/:id", async (req, res) => {
  let products = await product.findById(req.params.id);
  products.tourDestination = req.body.tourDestination;
  products.id = req.body.id;
  products.noOfSeats = req.body.noOfSeats;
  products.tourStart = req.body.tourStart;
  products.noOfDays = req.body.noOfDays;
  products.charges = req.body.charges;
  await products.save();
  return res.send(products);
});
router.delete("/:id", async (req, res) => {
  let products = await product.findByIdAndDelete(req.params.id);

  return res.send(products);
});
router.post("/", validateProduct, async (req, res) => {
  let products = new product();
  products.tourDestination = req.body.tourDestination;
  products.id = req.body.id;
  products.noOfSeats = req.body.noOfSeats;
  products.tourStart = req.body.tourStart;
  products.noOfDays = req.body.noOfDays;
  products.charges = req.body.charges;
  await products.save();

  return res.send(products);
});

module.exports = router;

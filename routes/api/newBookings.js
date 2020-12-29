const express = require("express");
var router = express.Router();
const validatenewbookings = require("../../middlewares/newBookings");
var { newBooking, validate } = require("../../models/newBookings");
var { product } = require("../../models/product");
router.get("/cart", async function (req, res, next) {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let products = await newBooking.find().skip(skipRecords).limit(perPage);
  let total = await newBooking.countDocuments();
  return res.send({ total, products });
});
router.post("/cart/:id", async (req, res) => {
  let booking = await product.findById(req.params.id);
  let products = new newBooking();
  products.tourDestination = booking.tourDestination;
  products.id = booking.id;
  products.noOfSeats = booking.noOfSeats;
  products.tourStart = booking.tourStart;
  products.noOfDays = booking.noOfDays;
  products.charges = booking.charges;
  await products.save();

  return res.send(products);
});
router.get("/cart/remove/:id", async function (req, res, next) {
  let cart = [];
  if (req.cookies.cart) cart = req.cookies.cart;
  cart.splice(
    cart.findIndex((c) => c._id == req.params.id),
    1
  );
  res.cookie("cart", cart);
  res.redirect("/api/cart");
});
router.delete("/cart/:id", async (req, res) => {
  let products = await newBooking.findByIdAndDelete(req.params.id);

  return res.send(products);
});
router.get("/checkout", async function (req, res, next) {
  let newbooking = await newBooking(req.body);
  res.render("/api/newBookings/checkout", { newbooking });
});
router.post("/checkout", async function (req, res, next) {
  let newbooking = new newBooking(req.body);
  newbooking.tourDestination = req.body.tourDestination;
  newbooking.id = req.body.id;
  newbooking.tourStart = req.body.tourStart;
  newbooking.noOfDays = req.body.noOfDays;
  newbooking.charges = req.body.charges;
  await newbooking.save();
  res.redirect("/api/products");
});
module.exports = router;

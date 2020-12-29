const express = require("express");
var router = express.Router();
const validateUsers = require("../../middlewares/validateUsers");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
let { users } = require("../../models/users");
var bcrypt = require("bcryptjs");
const config = require("config");
const auth = require("../../middlewares/auth");
router.get("/", async (req, res) => {
  let page = Number(req.query.page ? req.query.page : 1);
  let perPage = Number(req.query.perPage ? req.query.perPage : 10);
  let skipRecords = perPage * (page - 1);
  let user = await users.find().skip(skipRecords).limit(perPage);
  return res.send(user);
});
router.post("/register", validateUsers, async (req, res) => {
  let user = await users.findOne({ Username: req.body.Username });
  if (user) return res.status(400).send("Username already exists");
  user = new users();
  user.Username = req.body.Username;
  user.password = req.body.password;
  await user.generateHashedPassword();
  await user.save();
  let token = jwt.sign(
    { _id: user._id, Username: user.Username, role: user.role },
    config.get("jwtPrivateKey")
  );
  let datatoReturn = { Username: user.Username, token: user.token };
  return res.send(datatoReturn);
});
router.post("/login", async (req, res) => {
  let user = await users.findOne({ Username: req.body.Username });
  if (!user) return res.status(400).send("User Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, Username: user.Username, role: user.role },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
module.exports = router;

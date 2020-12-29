const { validate } = require("../models/newBookings");
function validatenewBookings(req, res, next) {
  let { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
}
module.exports = validatenewBookings;

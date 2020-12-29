var mongoose = require("mongoose");
const joi = require("@hapi/joi");
var bookingSchema = mongoose.Schema({
  tourDestination: String,
  id: String,
  noOfSeats: String,
  tourStart: Date,
  noOfDays: String,
  charges: String,
});
var newBooking = mongoose.model("newBookings", bookingSchema);
function validatenewBookings(data) {
  const schema = joi.object({
    name: joi.string().min(3).max(10).required(),
    id: joi.string().min(4).max(4).required(),
    noOfSeats: joi.string().min(0).required(),
    tourStart: joi.date().required(),
    noOfDays: joi.string().min(1).required(),
    charges: joi.string().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.newBooking = newBooking;
module.exports.validate = validatenewBookings;

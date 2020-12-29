var mongoose = require("mongoose");
const joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
  tourDestination: String,
  id: String,
  noOfSeats: String,
  tourStart: Date,
  noOfDays: String,
  charges: String,
});
var product = mongoose.model("bookings", productSchema);
function validateProduct(data) {
  const schema = joi.object({
    tourDestination: joi.string().min(3).max(100).required(),
    id: joi.string().min(4).max(4).required(),
    noOfSeats: joi.string().min(0).required(),
    tourStart: joi.date().required(),
    noOfDays: joi.string().min(1).required(),
    charges: joi.string().min(0).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.product = product;
module.exports.validate = validateProduct;

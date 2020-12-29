var mongoose = require("mongoose");
const joi = require("@hapi/joi");
var bcrypt = require("bcryptjs");
var usersSchema = mongoose.Schema({
  Username: String,
  password: String,
  role: {
    type: String,
    default: "user",
  },
});
usersSchema.methods.generateHashedPassword = async function () {
  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};
var users = mongoose.model("users", usersSchema);
function validateUsers(data) {
  const schema = joi.object({
    Username: joi.string().min(3).max(10).required(),
    password: joi.string().min(3).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
function validateUsersLogin(data) {
  const schema = joi.object({
    Username: joi.string().min(3).max(10).required(),
    password: joi.string().min(3).required(),
  });
  return schema.validate(data, { abortEarly: false });
}
module.exports.users = users;
module.exports.validate = validateUsers;
module.exports.validateUsersLogin = validateUsersLogin;

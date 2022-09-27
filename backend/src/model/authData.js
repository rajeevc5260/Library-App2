const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rajeevc:rajeev321@cluster0.w68gpom.mongodb.net/LibraryDB"
);

const authSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  confirmPassword: String,
});

const authData = mongoose.model("authDetails", authSchema);

module.exports = authData;

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://rajeevc:rajeev321@cluster0.w68gpom.mongodb.net/LibraryDB"
);

const booksSchema = mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  rating: String,
  image: String,
});

const booksData = mongoose.model("booksDetails", booksSchema);

module.exports = booksData;

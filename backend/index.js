const express = require("express");
const cors = require("cors");
const authData = require("./src/model/authData");
const booksData = require("./src/model/booksData");
const jwt = require("jsonwebtoken");

const app = express();
// const PORT = 3000;
app.use(cors());
app.use(express.json());

var username = "admin@gmail.com";
var password = "Admin@123";

// Sign up form data POST
app.post("/signUp", (req, res) => {
  var signUpDetails = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  };
  var logData = authData(signUpDetails);
  logData.save();

  authData.find().then((logData) => {
    res.send(logData);
  });
});

// Add Books data POST
app.post("/addBooks", (req, res) => {
  var addBooks = {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    description: req.body.description,
    rating: req.body.rating,
    image: req.body.image,
  };
  var addBookData = booksData(addBooks);
  addBookData.save();

  booksData.find().then((addBookData) => {
    res.send(addBookData);
  });
});

// GET on Books
app.get("/books", (req, res) => {
  booksData.find().then((addBookData) => {
    res.send(addBookData);
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  booksData.findOne({ _id: id }).then((book) => {
    res.send(book);
  });
});

// Update a Book
app.put("/update", (req, res) => {
  var id = req.params.id;
  var title = req.params.title;
  var author = req.params.author;
  var genre = req.params.genre;
  var description = req.params.description;
  var rating = req.params.rating;
  var image = req.params.image;

  console.log(req.body);
  (id = req.body._id),
    (title = req.body.title),
    (author = req.body.author),
    (genre = req.body.genre),
    (description = req.body.description),
    (rating = req.body.rating),
    (image = req.body.image),
    booksData
      .findByIdAndUpdate(
        { _id: id },
        {
          $set: {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            description: req.body.description,
            rating: req.body.rating,
            image: req.body.image,
          },
        }
      )
      .then(() => {
        res.send();
      });
});

// DELETE a Book
app.delete("/remove/:id", (req, res) => {
  console.log("Deleting");
  booksData.findByIdAndRemove(req.params.id, (err, deleteBook) => {
    if (err) {
      res.send("Error in deleting the book");
    } else {
      res.json(deleteBook);
    }
  });
});

// login
app.post("/login", (req, res) => {
  let userData = req.body;

  if (!username) {
    res.status(401).send("Invalid Username");
  } else if (password !== userData.password) {
    res.status(401).send("Invalid Password");
  } else {
    let payload = { subject: username + password };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({ token });
  }
});

app.get("/", function (req, res) {
  res.render("index", {});
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Ready on 3000");
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

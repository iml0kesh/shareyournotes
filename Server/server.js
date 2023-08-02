require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/dbconn");
const authRoutes = require("./routes/auth");
const noteRoutes = require("./routes/note");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Database Connection status
db;

app.get("/home", (req, res) => {
  res.json({
    name: "Bill",
    age: 99,
  });
});

// AUTH ROUTES.
app.use("/auth", authRoutes);

// NOTE ROUTES
app.use("/note", noteRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is up and running on port ${process.env.PORT}`);
});

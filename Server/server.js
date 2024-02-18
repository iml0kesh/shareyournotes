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

// To serve static files {CSS Files}

// Database Connection status
db;

// AUTH ROUTES.
app.use("/auth", authRoutes);

// NOTE ROUTES
app.use("/note", noteRoutes);

// Render all Notes.

app.listen(3001, () => {
  console.log(`Server is up and running on port 3001`);
});

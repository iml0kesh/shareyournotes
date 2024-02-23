require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/dbconn");
const userRoutes = require("./routes/User");
const noteRoutes = require("./routes/Note");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Database Connection status
db;

app.use("/users", userRoutes);

// NOTE ROUTES
app.use("/note", noteRoutes);

// Render all Notes.

app.listen(3001, () => {
  console.log(`Server is up and running on port 3001`);
});

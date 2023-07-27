const mongoose = require("mongoose");

const db = mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("connection Success Bro!...");
  })
  .catch((err) => {
    console.log("Db not Connected", err);
  });

module.exports = db;

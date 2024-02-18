const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/shareyournotes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection success! (MongoDB)");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Export the Mongoose instance to use it in other parts of your application
module.exports = mongoose.connection;

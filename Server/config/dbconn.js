const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://lokesh:lokesh@shareyournotes.lxsfd08.mongodb.net/notes?retryWrites=true&w=majority&appName=Shareyournotes",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connection success! (MongoDB)");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Export the Mongoose instance to use it in other parts of your application
module.exports = mongoose.connection;

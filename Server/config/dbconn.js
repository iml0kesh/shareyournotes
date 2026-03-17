import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connection success! (MongoDB)");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// Export the Mongoose instance to use it in other parts of your application
export default mongoose.connection;

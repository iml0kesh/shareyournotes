import "dotenv/config";

import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";
import "./config/dbconn.js";
import userRoutes from "./routes/User.js";
import noteRoutes from "./routes/Note.js";

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use("/users", userRoutes);

// NOTE ROUTES
app.use("/note", noteRoutes);

app.listen(3001, () => {
  console.log(`Server is up and running on port 3001`);
});

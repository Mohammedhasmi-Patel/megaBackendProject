import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is running at 3000`);
    });
  })
  .catch((err) => {
    console.log(`mongo connection error ${err}`);
  });

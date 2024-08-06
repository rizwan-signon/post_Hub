import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import { error } from "./middlewares/error";
config();
const PORT = process.env.PORT || 3000;
const app = express();
mongoose
  .connect("mongodb://localhost:27017/postHub")
  .then(() => console.log("data base is connected to this project "))
  .catch((err) => console.log(err));

app.use(error);
app.listen(PORT, () => {
  console.log(`server is litening on ${PORT}`);
});

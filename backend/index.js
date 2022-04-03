const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

mongoose
  .connect("mongodb://localhost:27017/intr", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", userRoutes);
app.use("/", orderRoutes);

app.listen(8000, () => console.log("Server is running on 8000 port"));

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");

const estateRoutes = require("./routes/estates");

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use("/api/estates", upload.array("img"), estateRoutes);

mongoose
  .connect(process.env.MONGO_URI)

  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("listening for requests on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

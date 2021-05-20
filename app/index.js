const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const configs = require("./values/configs");

const routes = require("./routes");

// mongoose
//   .connect(configs.MONGOOSE_CONNECTION_URL, configs.MONGOOSE_CONFIG)
//   // .connect('mongodb://localhost:27017/perni', {useNewUrlParser: true})
//   .then(() => console.log("MONGOOSE CONNECTED"))
//   .catch((err) => console.log({ err }));

//Express Config
app.use(morgan("dev"));
// app.use("/images", express.static("images"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use("/api/v1/admin/product", adminRoutes.product);
app.use("/api/wallet", routes.wallet);
app.use("/api/trade", routes.trade);
// CORS Settings
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//404 Error
app.use((req, res, next) => {
  const error = new Error("Not found");
  res.status(404).json("Not found");
});

module.exports = app;

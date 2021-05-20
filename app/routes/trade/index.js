const express = require("express");
const router = express.Router();
const util = require("../../util");
const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "q1GCB1Hb16UDAz0N9L4u9QcbCGL8f34Ua13cbJDYMIOhM5e1qKyj1ucYpivvoC5h",
  APISECRET: "5DqJ3SlirU3vZrbOxkUsNCAu6wkUWQaiN5cioC2Hi23u4bLELc1Xe6qgaBbPGUfl",
});

router.post("/limitOrder/buy", async (req, res) => {
  try {
    const { quantity, price, pair } = req.body;
    console.log({ quantity, price, pair });
    const response = await binance.buy(pair, quantity, price);
    console.log({ response });
  } catch (e) {
    const error = JSON.parse(e.body);
    res.send({ ERROR: error.code });
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();
const Binance = require("node-binance-api");
const binance = new Binance().options({
  APIKEY: "q1GCB1Hb16UDAz0N9L4u9QcbCGL8f34Ua13cbJDYMIOhM5e1qKyj1ucYpivvoC5h",
  APISECRET: "5DqJ3SlirU3vZrbOxkUsNCAu6wkUWQaiN5cioC2Hi23u4bLELc1Xe6qgaBbPGUfl",
});
router.get("/", async (req, res) => {
  let ticker = await binance.prices();
  console.info(`Price of BNB: ${ticker.BNBUSDT}`);
});

router.get("/balance", async (req, res) => {
  binance.balance((error, balances) => {
    if (error) return console.error(error);
    console.info("balances()", balances);
    console.info("THETA balance: ", balances.THETA.available);
    res.send({ balances });
  });

  router.get("/limitOrder", async (req, res) => {
    const { quantity, price, pair } = req.body;

    console.log({ quantity, price, pair });
  });
});

module.exports = router;

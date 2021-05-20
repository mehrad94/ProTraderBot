const values = require("../values");

module.exports = (code, res) => {
  console.log({ A: values.statusCode.BAD_SYMBOL, B: code.toString() });
  switch (code) {
    case code.toString() === values.statusCode.BAD_SYMBOL:
      res.send("BAD_SYMBOL");
      break;
    default:
      res.send("ERROR");
      break;
  }
};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema({
  id: {
    type: Number,
    require: true,
  },

  symbol: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  percent_change_1h: {
    type: Number,
    require: true,
  },
  market_cap: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("data", data);

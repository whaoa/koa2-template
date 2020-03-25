/**
 * @LastEditors Wanghao
 * @Date 2020-03-05 17:58
 * @Description:
 */
const Schema = require("mongoose").Schema;

// elec submit schema
module.exports = new Schema({
  wellId: Number,
  elecId: Number,
  wellName: String,
  beforeDateBaseMoney: Number,
  toupMoney: Number,
  beforeElecMoney: Number,
  afterDataBaseMoney: Number,
  errorValue: Number,
  timeStamp: {type: Number, default: new Date().getTime()}
}, {versionKey: false});

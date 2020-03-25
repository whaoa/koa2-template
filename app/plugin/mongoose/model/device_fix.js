/*
 * @Date: 2020-03-25 15:52:33
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-03-25 16:03:59
 * @FilePath: \koa\app\plugin\mongoose\model\device_fix.js
 * @Description: mongodb model demo
 */
const Schema = require("mongoose").Schema;

module.exports = new Schema({
  // fields
}, {versionKey: false});

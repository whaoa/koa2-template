/*
 * @Date: 2020-03-25 15:58:09
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-03-25 16:02:46
 * @FilePath: \koa\app\plugin\mongoose\index.js
 * @Description: mongodb 配置
 */
const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { host, options } = require("../../config").mongodb;

// config and connect
mongoose.connect(host, options);

// on error
mongoose.connection.on('error', function (err) {
  console.error('Mongoose connection error. (in config/mongo)', err);
});

// 导入 Model
// const Model = mongoose.model('Name', require("./model/"), 'name');

module.exports = {
  // models
};

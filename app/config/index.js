/*
 * @Date: 2020-03-05 15:06:07
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-03-25 16:13:25
 * @FilePath: \koa\app\config\index.js
 * @Description: 配置文件
 */
let config = {};

// 项目部署域名
config.domain = "";
// 项目启动端口号
config.port = 3000;

// mysql 连接配置
config.mysql = {
  host: "",
  user: "",
  password: "",
  database: "",
  port: 3306,
};

// mongodb 链接配置
config.mongodb = {
  host: "",
  options: {
    // auth: {
    //   authSource: 'admin' // 阿里云数据库鉴权
    // },
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
};

// other config options

module.exports = config;

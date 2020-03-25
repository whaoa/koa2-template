/*
 * @Date: 2020-03-25 15:52:33
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-03-25 15:59:57
 * @FilePath: \koa\app\plugin\sequelize\index.js
 * @Description: MYSQL 配置文件
 */
const Sequelize = require("sequelize");
const {
  host, port, user, password, database
} = require("../../config").mysql;

// 配置数据库
const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  timezone: '+08:00'  //  解决时差 - 默认存储时间存在8小时误差
});

// 导入模型
// const Model = require("./model/")(sequelize, Sequelize);

// 配置模型关系
// 详细配置方法参考：https://whaoa.gitee.io/blogs/posts/2020/03/19/sequelize.html

module.exports = {
  Sequelize,
  sequelize,
  // other models
};

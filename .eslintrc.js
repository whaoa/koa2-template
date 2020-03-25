/*
 * @Date: 2020-03-25 16:23:08
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-03-25 16:23:43
 * @FilePath: \koa\.eslintrc.js
 * @Description: eslint 配置文件
 */
module.exports = {
  extends: ["alloy"],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    // browser: true,
    node: true
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  }
};

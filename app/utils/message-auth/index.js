/**
 * @LastEditors Wanghao
 * @Date 2020-03-05 12:37
 * @Description: 钉钉机器人 消息验证
 */
const crypto = require("crypto");
const { robots: { autoRobot: { secret }} } = require("../../config").dingtalk;

/**
 * @description: 请求验证
 * @param {String} timestamp 请求发送时间戳
 * @param {String} sign 用于对比的签名
 * @return: Boolean
 */
module.exports = function (timestamp, sign) {
  // 如果 时间戳 与 本地时间 相差超过 1小时
  if (Date.now() - parseInt(timestamp) > 1000 * 60 * 60) return false;
  // 计算签名
  const signature = crypto.createHmac("sha256", secret).update(`${timestamp}\n${secret}`).digest("base64");
  // 返回结果
  return signature === sign;
};

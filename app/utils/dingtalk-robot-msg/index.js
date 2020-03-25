/**
 * @LastEditors Wanghao
 * @Date 2020-03-05 16:26
 * @Description: 发送消息到 钉钉自定义机器人
 */
const crypto = require("crypto");
const axios = require("axios");

/**
 * @description: 发送机器人消息
 * @param {Object} robot 机器人配置对象
 * @param {Object} data 发送数据对象
 * @return: Promise
 */
module.exports = async function ({ access_token, secret }, data) {
  // 生成时间戳
  const timestamp = Date.now();
  // 生成签名
  const sign = crypto.createHmac("sha256", secret).update(`${timestamp}\n${secret}`).digest("base64");
  const result = await axios({
    url: "https://oapi.dingtalk.com/robot/send",
    method: "POST",
    params: {
      access_token,
      timestamp,
      sign,
    },
    data,
  });
  return result.data;
};


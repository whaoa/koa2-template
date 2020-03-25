/*
 * @Date: 2020-02-04 14:31:13
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-02-25 15:23:05
 * @FilePath: \backend\app\utils\code2session.js
 * @Description: 
 */
const logger = require("./logger");
const OSSUploader = require("./oss-uploader");
const group = require("./group");
const image2Base64 = require("./image2base64");
const sendSMS = require("./send-sms");
const messageAuth = require("./message-auth");
const sendMsgToRobot = require("./dingtalk-robot-msg");

module.exports = {
  logger,
  OSSUploader,
  group,
  image2Base64,
  sendSMS,
  messageAuth,
  sendMsgToRobot,
};

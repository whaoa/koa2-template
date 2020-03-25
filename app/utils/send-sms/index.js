/*
 * @Date: 2020-02-25 12:11:00
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-02-25 12:23:17
 * @FilePath: \backend\app\utils\send-sms\code2session.js
 * @Description: 阿里云短息发送
 */
const Core = require('@alicloud/pop-core');
const { access } = require("../../config").aliyun;

// 参数配置
const client = new Core({
  ...access,
  endpoint: 'https://dysmsapi.aliyuncs.com',
  apiVersion: '2017-05-25'
});

/**
 * @description: 发送短信
 * @param {String} PhoneNumbers 手机号码，支持对多个手机号群发，手机号码之间以英文逗号（,）分隔
 * @param {String} SignName 短信签名名称。请在控制台签名管理页面签名名称一列查看
 * @param {String} TemplateCode 短信模板ID。请在控制台模板管理页面模板CODE一列查看
 * @param {Object} TemplateParam 短信模板变量对应的实际值，JSON格式。
 * @return: Promise
 */
module.exports = async ({ PhoneNumbers, SignName, TemplateCode, TemplateParam }) => {
  const params = {
    RegionId: "cn-hangzhou",
    PhoneNumbers, // 支持对多个手机号码发送短信，手机号码之间以英文逗号（,）分隔。
    SignName, // 短信签名名称。
    TemplateCode,
    TemplateParam: JSON.stringify(TemplateParam),
  };
  
  return client.request('SendSms', params, { method: "POST" })
};

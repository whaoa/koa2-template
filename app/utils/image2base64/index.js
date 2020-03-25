// 图片文件 转为 base64
const fs = require("fs");

module.exports = filePath => {
  let data = fs.readFileSync(filePath);
  return Buffer.from(data).toString("base64");
};

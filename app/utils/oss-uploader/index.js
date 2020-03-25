const OSS = require('ali-oss');
const { access, oss } = require("../../config").aliyun;

module.exports = async (ossPath, localPath) => {
  const client = new OSS({ ...access, ...oss });
  try {
    const put = await client.put(ossPath, localPath); 
    return put;
  } catch (e) {
    console.log(e);
    Promise.reject(e);
  }
};

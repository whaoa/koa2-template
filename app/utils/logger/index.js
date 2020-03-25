const dayjs = require("dayjs");

module.exports = (...arg) => {
  console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}]`, "*", ...arg);
};

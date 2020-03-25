// router logger middleware
const dayjs = require("dayjs")

module.exports = () => {
  return async (ctx, next) => {
    // 普通 log
    ctx.log = (...arg) => {
      console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}]`, ' -', ...arg);
    };

    await next();
  };
};

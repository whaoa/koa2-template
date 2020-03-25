const dayjs = require("dayjs");

module.exports = () => {
  return async (ctx, next) => {
    const start = new Date();

    console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}]`, ">", ctx.method, ctx.url);

    // 输出 请求参数
    // query params
    if (Object.keys(ctx.query).length) ctx.log("Params-Query", JSON.stringify(ctx.query))
    // body params
    if (ctx.request.body && Object.keys(ctx.request.body).length) ctx.log("Params-Body", JSON.stringify(ctx.request.body))
    // url params
    if (ctx.params && Object.keys(ctx.params).length) ctx.log("Params-Url", JSON.stringify(ctx.params))

    await next();

    const ms = new Date() - start;

    console.log(`[${dayjs().format("YYYY-MM-DD HH:mm:ss")}]`, "<", ctx.method, ctx.url, ctx.response.status, `${ms}ms`);
  };
};

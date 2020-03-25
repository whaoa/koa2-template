/*
 * @Date: 2020-03-25 15:44:15
 * @LastEditors: Wanghao
 * @LastEditTime: 2020-03-25 15:48:28
 * @FilePath: \koa\app\index.js
 * @Description: 主文件
 */
const Koa = require("koa");
const app = new Koa();

const views = require("koa-views");
const onerror = require("koa-onerror");
const koaBody = require("koa-body");
const xmlParser = require('koa-xml-body');

const path = require("path");
const walkSync = require("walk-sync");

const { logger } = require("./utils");

const httpLogger = require("./middleware/http-logger");
const routerLogger = require("./middleware/router-logger");
const parameter = require('./middleware/parameter');

// 中间件

// 错误监听处理
onerror(app);
// 跨域配置
app.use(require('koa2-cors')());
// 参数解析
app.use(koaBody({
  parsedMethods: ["POST", "PUT", "PATCH", "DELETE"],
  multipart: true,
  formidable: {
    uploadDir: __dirname + "/app/public/temp", // 保存目录
    keepExtensions: true,
    maxFileSize: 1024 * 1024 * 10 // 设置上传文件大小最大限制，默认2M
  }
}));
// xml参数解析
app.use(xmlParser({
  key: 'xml',
  xmlOptions: { explicitArray: false },
}));
// 日志输出
app.use(routerLogger());
app.use(httpLogger());
// 参数校验
app.use(parameter());
// 响应数据处理
app.use(require("koa-json")());
// 静态资源文件
app.use(require("koa-static")(path.resolve(__dirname, "./public")));
// 模板引擎
app.use(views(path.resolve(__dirname , "./views"), {
  extension: "pug"
}));

// 路由自动注册
const routers = walkSync(path.resolve(__dirname, "./routes"), {
  directories: false, // 不输出 文件夹
  includeBasePath: true // 添加相对路径前缀
  // ignore: ["timer", "unknown"] // 忽略
});
routers.forEach(item => {
  const router = require(path.resolve(__dirname, item));
  app.use(router.routes(), router.allowedMethods());
});
logger(`${routers.length} router files loaded.`);

// 定时任务
// require("./schedule/");

// 错误处理
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;

#!/usr/bin/env node

// 项目启动文件

// 导入依赖
const app = require('../app');
const debug = require('debug')('demo:server');
const http = require('http');
const { port: PORT } = require('../app/config');

// 设置端口号
const port = normalizePort(process.env.PORT || PORT);

// 创建 http 对象
const server = http.createServer(app.callback());

// 启动 server 并 监听指定端口号
server.listen(port);

// 事件监听处理
server.on('error', onError);
server.on('listening', onListening);

// 端口号处理
function normalizePort (val) {
  const port = parseInt(val, 10);
  // named pipe
  if (isNaN(port))  return val;
  // port number
  if (port >= 0)  return port;
  return false;
}

// 错误事件处理
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// 启动事件处理
function onListening () {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// 参数校验
const Parameter = require('parameter');

module.exports = function () {
  let parameter = new Parameter({
    convert: true,
  });

  return async function (ctx, next) {
    // 挂载到 ctx
    ctx.verifyParams = function (rules, params) {
      if (!rules) return;
  
      if (!params) {
        params = ['GET', 'HEAD'].includes(this.method.toUpperCase())
          ? this.request.query
          : this.request.body;  
        // copy
        params = Object.assign({}, params, this.params);
      }
      const errors = parameter.validate(rules, params);

      if (!errors) return;

      ctx.log('Invalid-Param:', JSON.stringify({ errors, params }));
      
      this.throw(422, 'Validation Failed', {
        code: 'INVALID_PARAM',
        errors,
        params
      });
    };

    try {
      await next();
    } catch (err) {
      if (err.code === 'INVALID_PARAM') {
        ctx.status = 422;
        ctx.body = {
          code: 422,
          msg: err.message,
          errors: err.errors,
        };
        return;
      }
      throw err;
    }
  };
};

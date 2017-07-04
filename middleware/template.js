/**
 * Created by Anshi on 2017/6/26.
 */
const nunjucks = require('nunjucks');

function createEnv(path, opts) {
    /* let
     autoescape = opts.autoescape === undefined ? true : opts.autoescape,
     noCache = opts.noCache || false,
     watch = opts.watch || false,
     throwOnUndefined = opts.throwOnUndefined || false;
     /!*let env = new nunjucks.Environment(
     new nunjucks.FileSystemLoader(path || 'views', {
     noCache: noCache,
     watch: watch,
     }), {
     autoescape: autoescape,
     throwOnUndefined: throwOnUndefined
     });*!/
     if (opts.filters) {
     for (var f in opts.filters) {
     env.addFilter(f, opts.filters[f]);
     }
     }
     return env;*/
}

function templating(path, opts) {
    // 创建Nunjucks的env对象:
    const fs = require('fs');
    return async (ctx, next) => {
        // 给ctx绑定render函数:

        ctx.render = function (view) {
            // 把render后的内容赋值给response.body:
            console.log(process.cwd(`view/${view}`))
            ctx.response.body = fs.readFileSync(`view/${view}`,'utf8');
            // 设置Content-Type:
            ctx.response.type = 'text/html';
        };
        // 继续处理请求:
        await next();
    };
}
module.exports = templating;

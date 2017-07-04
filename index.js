/**
 * Created by Anshi on 2017/6/26.
 */

const Koa = require('koa');
const koa_router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const controller = require('./middleware/controllers');
const nunjucks = require('nunjucks');
const template = require('./middleware/template');
const koaStatic = require('koa-static');


const app = new Koa(),
    router = koa_router();
app.use(bodyParser());
app.use(template('view', {
    noCache: true,
    watch: true
}));
app.use(controller());

app.use(koaStatic(__dirname+'/static'));

app.use(async function pageNotFound(ctx) {
    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
    ctx.status = 404;

    switch (ctx.accepts('html', 'json')) {
        case 'html':
            ctx.type = 'html';
            ctx.body = '<p>Page Not Found</p>';
            break;
        case 'json':
            ctx.body = {
                message: 'Page Not Found'
            };
            break;
        default:
            ctx.type = 'text';
            ctx.body = 'Page Not Found';
    }
});

/*
 app.use(router.routes()); //引入router 噢。。
 */
nunjucks.configure('views', {
    autoescape: true,
    koa: app
});

// log request URL:
/*app.use(async (ctx, next) => {
    ctx.render('index.html', {
        title: 'Welcome',
        content:"Welcome index"
    });
});*/



app.use(router.routes());

app.listen(8090);
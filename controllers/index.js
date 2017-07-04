var crud = require('../dataBase/weiboTest');
const fs = require('fs');
let fn_index = async function (ctx, next) {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

let fn_signin = async (ctx, next) => {
    let
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
};


let fn_home = function (ctx, next) {
    ctx.render('index.html');
    next();
}

module.exports = {
    'GET login/': fn_index,
    'POST /signin': fn_signin,
    'GET /': fn_home,
};
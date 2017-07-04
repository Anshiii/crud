/**
 * Created by Anshi on 2017/6/30.
 */
var crud = require('../dataBase/weiboTest');

let fn_list = async function (ctx, next) {
    console.log('user list')
    // ctx.response.body = crud.getCurrent();
    ctx.response.body = await crud.getCurrent();
}
let api_delete = async function (ctx, next) {
    console.log(ctx.request.method);
    var querystring = ctx.request.querystring;
    ctx.response.body = '@@@@@@.@@@@'
}

let api_add = async function (ctx, next) {
    let document = ctx.request.body;
    const a = await crud.createAndSave(document)
    console.log(a)
    ctx.response.body = {code: 200, msg: "添加成功",data:a}
};
let api_put = async function (ctx, next) {
    let _id = ctx.request.body.id;
    let data = JSON.parse(ctx.request.body.new);
    // const a = await crud.findAndUpdate(_id,data);
    let a = await crud.findAndUpdate(_id, data);
    if (a.code === 200) {
        ctx.response.body = {code: 200, msg: "修改成功", data: a.data}
    } else {
        ctx.response.body = {code: 0, msg: "修改失败"}
    }
}
module.exports = {
    'DEL /item/:id': api_delete,
    'GET /user/list': fn_list,
    'PUT /item/:id': api_put,
    'POST /item': api_add
};
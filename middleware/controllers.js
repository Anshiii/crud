function addMapping(router, mapping = {}) {
    for (let url in mapping) {
        if (url.startsWith('GET')) {
            let path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST')) {
            let path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else if (url.startsWith('DEL')) {
            let path = url.substring(4);
            router.del(path, mapping[url]);
            console.log(`invalid URL: ${url}`);
        } else if (url.startsWith('PUT')) {
            let path = url.substring(4);
            router.put(path, mapping[url]);
        }
    }
}

function addControllers(router) {
    const fs = require('fs');
    let files = fs.readdirSync('./controllers');
    let js_files = files.filter(f => f !== "controllers.js" && f.endsWith('.js'));
    console.log(js_files);
    js_files.forEach(item => {
        let map = require(`../controllers/${item}`);
        addMapping(router, map);
    })
}

module.exports = function () {
    let router = require('koa-router')();
    addControllers(router);
    //??@似乎是将当前配置导出。app.get/post等？？？？？？？不明，刚才没有也能做到路径识别啊。？？
    return router.routes(); //
}
/**
 * Created by Anshi on 2017/6/30.
 */



var store = {
    debug: true,
    state: {
        pageState: 'onShow' //onShow,onChange
    },
    mutations: {
        changeState: function (arg) {
            arg = arg || '';
            store.state.pageState = arg;
        }
    }
};


$(document).ready(function () {
    var app = new Vue({
        el: '#app',
        data: {
            list: [],
            test: "344",
            document: {user:'示例：anshi',text:'示例：yuki烂爆炸'},
            newData:{},
            state: store.state
        },
        methods: {
            compare: function () {

            },
            add: function (data) {
                $.ajax({
                    type: 'POST',
                    url: 'item',
                    data: data,
                    success: function (e) {
                        console.log(e)
                    }
                })
            },
            delete: function (id) {
                $.ajax({
                    type: 'DELETE',
                    url: 'item/',
                    data: {
                        id: id
                    },
                    success: function (json) {
                        if (1) {
                            console.log('删除成功')
                        }
                    }
                })
            },
            update: function (item) {
                var id = item._id;
                $.ajax({
                    type: 'PUT',
                    url: encodeURI('/item/' + id),
                    data: {
                        id: id,
                        new: JSON.stringify(item)
                    },
                    success: function (json) {
                        if (1) {
                            console.log('更新成功')
                        }
                    }
                })
            },
            clickToSave: function (id) {
                var item = this.list[id]
                item.isChange = false;
                this.update(item);
            },
            clickToChange: function (id) {
                this.list[id].isChange = true;
            },
            clickToDelete: function (id) {
                this.delete(id);
            },
            clickToAdd: function (data) {
                this.add(data)
            }
        }
    })
    $.ajax({
        url: '/user/list',
        success: function (res) {
            console.log(res);
            app.list = res.map(function (item, idx) {
                item.isChange = false
                return item
            });
        }
    });
})

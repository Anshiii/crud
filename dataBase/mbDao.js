/**
 * Created by Anshi on 2017/6/27.
 */
//schema  是 文档与定义该文档的 map

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let crudSchema = new Schema({
    brand: String,
    model: String,
    runPoints: Number,
    release: Date,
    tags: Array
});

crudSchema.methods.findSimilarModel = function (cb, model) {
    return model.find({model: this.model}, cb)
}


module.exports = crudSchema;
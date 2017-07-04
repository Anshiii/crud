/**
 * Created by Anshi on 2017/6/27.
 */
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let weiboSchema = new Schema({
    creared:Date,
    text:String,
    user:String,
    ava:String,
    pics:Array
},{collection:'lolita'})

module.exports = weiboSchema;
/**
 * Created by Anshi on 2017/6/27.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/lolita');


var weiboSchema = require('./weiboDao');
let lolita = mongoose.model('lolita', weiboSchema);


module.exports = {
    getCurrent(){
        return lolita.model('lolita').find()
    },
    createAndSave(doc = {}){
        let one = new lolita(doc);
        return one.save();
    },
    async delete(condition){
        return await lolita.deleteMany(condition);
    },
    findAndUpdate(id, newData){
        return new Promise((resolve, reject) => {
            lolita.model('lolita').findByIdAndUpdate(id, newData, (err, doc) => {
                if (err) {
                    reject(err)
                } else if (doc) {
                    resolve({code:200,data:doc})
                }
            })
        })
    }
}
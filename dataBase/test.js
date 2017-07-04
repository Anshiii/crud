/**
 * Created by Anshi on 2017/6/26.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var db = mongoose.createConnection('mongodb://localhost/test',{port:27017});

var crudSchema = require('./mbDao');
var Points = db.model('Points', crudSchema);

var onePoint = new Points({model: 'HTC'});
onePoint.findSimilarModel((err, sth) => {
 console.log(sth,233)
 },Points);

db.on('error', console.error.bind(console, 'connection error:'));


var Cat = db.model('Cat', {name: String});

var kitty = new Cat({name: 'zhou wei'});
kitty.save()
    .then(meow => console.log('meow'))
    .catch(err => {
        console.log(err)
    });


var express = require('express');
var router = express.Router();
var mongodb = require('mongodb')
var mongoClient = mongodb.MongoClient;
//console.log(mongoClient);


var mongoUrl = 'mongodb://localhost:27017/movieDB';
var db;

//Acutally connect...

mongoClient.connect(mongoUrl, (error, database)=>{
    if(error) throw error;
    db = database;
    console.log('connected to mongo successfully...')

})


/* GET home page. */
router.get('/', function(req, res, next) {

    db.collection('movies').find().toArray((error, results)=>{
        console.log(results);
        res.json(results)
        })

    //res.render('index', { title: 'Express' });
});

module.exports = router;

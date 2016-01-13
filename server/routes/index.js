/**
 * Created by abrooksnagel on 1/12/16.
 */
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');

var router = express.Router();
var Assignment = require('../../models/assignments');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

router.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../../public/views/index.html'))
});

router.post('/addAss', function(request, response){
    console.log(request.body);
    var rb = request.body;

    var assign = new Assignment({name: rb.name,
                                number: request.body.number,
                                score: request.body.score,
                                date: request.body.date,
                                pass: request.body.pass});
    assign.save(function(err) {
        if(err){
            console.log(err);
        }else {
            response.sendStatus(200);
        }
    });
});

//A route to grabAss; find the assignment based on a query and send it back to client.js

MongoDB.on('error', function(err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function() {
    console.log('mongodb connection open!');
});

module.exports = router;
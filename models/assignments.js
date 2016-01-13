/**
 * Created by abrooksnagel on 1/12/16.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
    number: Number,
    name: String,
    score: Number,
    date: Date,
    pass: Boolean
});

var Assignment = mongoose.model('Assignment', schema);

module.exports = Assignment;


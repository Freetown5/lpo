var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
	title: String,
	url: String,
	languages: Array,
	cost: Number,
})
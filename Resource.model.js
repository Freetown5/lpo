var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
	title: String,
	url: String,
	languages: Array,
	cost: Number,
})

module.exports = mongoose.model('Resource', ResourceSchema);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResourceSchema = new Schema({
	title: String,
	url: String,
	languages: Array,
	costMin: Number,
	costMax: Number,
})

module.exports = mongoose.model('Resource', ResourceSchema);

"Bloc.io":{
	"url":"https://www.bloc.io/",
	"languages":[
		"HTML/CSS",
		"CLI",
		"Git",
		"Javascript",
		"Ruby",
		],
	"costMin":"0",
	"costMax":"19500",
	}

// db.resourceSchema.insert({
// 	title: 'Bloc.io',
// 	url: 'https://www.bloc.io/',
// 	languages: ['HTML/CSS', 'CLI', 'Git', 'Javascript', 'Ruby'],
// 	costMin: 0,
// 	costMax: 19500
// })





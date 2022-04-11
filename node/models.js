
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Database utilities.
mongoose.connect('mongodb://localhost/my_db');

const postSchema = new Schema({

  title: {type: String},
  author: String,
  slug: { type: String, unique: true },
  body: String,
  comments: [{ body: String, date: Date }],

  // {type: String, unique: true, default: "Neesham"},

  date: { type: Date, default: Date.now },

});


const courseSchema = new Schema({

	name: String,
	author: String,

	// Able to hold big text
	description: String,
	about: String,
	link: String,

	overallRating: Number,
	price: Number,
	category: String,
	platform: String,
	releaseDate: Date,
	country: String,
	language: String,
	duration: Number,
	certificate: Boolean,
	materialType: String,

	addedBy: mongoose.ObjectId,


});

const personShema = new Schema({

	name: String, 
	age: Number, 
	nationality: String

});

// const Course = mongoose.model("Course", courseShema);

const Person = mongoose.model("Person", personShema);

const Post = mongoose.model('Post', postSchema);

const Course = mongoose.model('Course', courseShema)

module.exports = {Post: Post, Person: Person, Course: Course};
const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const postSchema = new Schema({
  title: String,
  author: String,
  slug: { type: String, unique: true },
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});


// Database utilities.
mongoose.connect('mongodb://localhost/my_db');

var personShema = mongoose.Schema({name: String, age: Number, nationality: String});

var Person = mongoose.model("Person", personShema);

const Post = mongoose.model('Post', postSchema);

module.exports = {Post: Post, Person: Person};
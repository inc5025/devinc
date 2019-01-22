var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    content: String,
    category: {type: String, default: "etc"},
    subgroup: {type: String, default: ""},
    post_id: {type: Number, required: true, unique: true},
    created_date: {type: Date, default: Date.now},
});

module.exports = mongoose.model('post', postSchema);
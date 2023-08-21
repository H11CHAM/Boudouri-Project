const mongoose = require('mongoose');
const {Schema} = mongoose;

const courseSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    instructor: String,
    duration: String,
    level: String,
    ratings: Number,
    imageUrl: String,

});
module.exports.Course = mongoose.model('Course',courseSchema);
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    commentID: String,
    author: String,    // username of the author
    comment: String,
    likes: {
        type: Number,
        default: 0
    }
},
{
    toJSON: { virtuals: true } 
});

const ReviewSchema = new mongoose.Schema({
    reviewID: String,
    author: String,    // username of the author
    review: String,
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: [String],
        default: []
    }
},
{
    toJSON: { virtuals: true } 
});

const CourseSchema = new mongoose.Schema({
    courseID: String,
    name: String,
    stars: {
        type: Number,
        default: 0
    },
    reviews: {
        type: [String],
        default: []
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    }
},
{
    toJSON: { virtuals: true }
});

var Comment = mongoose.model('Comment', CommentSchema);
var Review = mongoose.model('Review', ReviewSchema);
var Course = mongoose.model('Course', CourseSchema);

module.exports = {Course, Review, Comment};
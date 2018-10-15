var mongoose = require('mongoose');

//configuring mongoose connecting to Mongodb database
mongoose.Promise = global.Promise; //tell mongo which Promise library we wanna use
mongoose.connect('mongodb://localhost:27017/todo');

module.exports = {
    mongoose
};
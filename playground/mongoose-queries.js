const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bc2ad5bb5f140f830b3330e';

/*var id = '5bc92e15d81deb88277c0d9411';
if (!ObjectID.isValid(id)) {
    console.log('Id is not valid'); 
}*/

/*Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
    
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);

});*/

/*Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo', todo);

}).catch((e) => console.log(e));*/

User.findById(id).then((user) => {
    if(!user){
        return console.log('user not found');  
    }
    console.log('User', user);
    
}).catch((e) => console.log(e));
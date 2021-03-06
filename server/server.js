var express =  require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose'); //var mongoose = require('./db/mongoose').mongoose;
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//When we create a resource, we use a POST http method
app.post('/todos', (req, res) => {
    //console.log(req.body);
    
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc)
    }, (e) => {
        res.status(400).send(e);
    });
    
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    });
});


app.get('/todos/:id', (req,res) => {
    //res.send(req.params);
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo: todo});
    }, (e) => {
        res.status(400).send();
    });

});
app.listen(3000, () => {
    console.log('Started on port 3000');  
});

module.exports = {
    app
};
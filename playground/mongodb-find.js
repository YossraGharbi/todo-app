//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');  
    }
    console.log('Connected to MongoDB server');

    //fetch all the data
    /*db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
        
    });*/

    //fetch the doc with completed value equal to false
    /*db.collection('Todos').find({
        
        completed: false

    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
        
    });*/

    //fetch the doc with the id = 5bbfd9099241b105086a59c2
    /*db.collection('Todos').find({
        
        _id: new ObjectID('5bbfd9099241b105086a59c2')

    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
        
    }, (err) => {
        console.log('Unable to fetch todos', err);
        
    });*/
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count : ${count}`);

    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    //db.close();
});
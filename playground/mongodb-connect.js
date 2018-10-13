const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');  
    }
    console.log('Connected to MongoDB server');

    //Section1: Insert data to the database

    /*db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
          return console.log('Unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        
    });*/

    //Insert new DOC into Users COLLECTION (name, age, location)

    db.collection('Users').insertOne({
        name: 'Yossra',
        age: 24,
        location: 'Bizerte'
    }, (err, result) => {
        if (err) {
            return ('Unable to insert to Users', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        
    });

    db.close();
});
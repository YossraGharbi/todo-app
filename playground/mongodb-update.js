//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');  
    }
    console.log('Connected to MongoDB server');

   //findOneAndUpdate => update and Item and get tne new Document back
   db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bc2774fd560be621bd2b9cb')
    }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
            
        });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5bc0040bd340cd2e4d3a214f')
    }, {
            $set: {
                name: 'Barhoum',
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);

        });
    //db.close();
});
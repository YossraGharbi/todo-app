//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');  
    }
    console.log('Connected to MongoDB server');

    //deleteMany
    /*db.collection('Todos').deleteMany({ text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

    //deleteOne
    /*db.collection('Todos').deleteOne({ text: 'Eat lunch'}).then((result) => {
        console.log(result);
    });*/

    //findOneAndDelete => gets the doc back as well as deleting it
    /*db.collection('Todos').findOneAndDelete({ completed: false}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Users').deleteMany({ name: 'Yossra'}).then((result) => {
        console.log(result);
    });*/

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5bc27aa9d560be621bd2baf6')}).then((result) => {
        console.log(result);
    });

    //db.close();
});
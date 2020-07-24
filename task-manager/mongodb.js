//CRUD - CREATE READ UPDATE DELETE

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!!');
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f1aadac088ed07b0394fd15") },
    //   (error, document) => {
    //     if (error) {
    //       return console.log("No User!!");
    //     }
    //     console.log(document);
    //   }
    // );
    db.collection('users')
      .find({ age: 22 })
      .toArray((error, user) => {
        if (error) {
          return console.log('No User!!');
        }
        console.log(user);
      });

    db.collection('users')
      .find({ age: 22 })
      .count((error, count) => {
        if (error) {
          return console.log('No User!!');
        }
        console.log(count);
      });

    db.collection('tasks').find(
      { _id: new ObjectID('5f1aa999677a1c793aa92c76') },
      (error, user) => {
        if (error) {
          return console.log('No User!!');
        }
        console.log(document);
      }
    );

    // db.collection("users").insertOne(
    //   {  name: "Subhiksh", age: 21 },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert!!!");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     { name: "Akrithi", age: 22 },
    //     { name: "Suraksha", age: 21 },
    //     { name: "Anvitha", age: 22 },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert!!!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     { description: "Frontend", status: true },
    //     { description: "Backend", status: true },
    //     { description: "Analysis", status: false },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Error!! Unable to insert!!");
    //     }
    //     console.log(result.ops);
    //   }
    // );
  }
);

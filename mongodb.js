const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";

const database = "task-manager";
MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to the database..");
    }
    const db = client.db(database);
    // db.collection('users').findOne({name:'amjad'},(error,user)=>{
    //     if (error){
    //         return console.log('unable to fecth the user');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({age:27}).toArray((error,users)=>{
    //     if (error){
    //         return console.log('unable to fetch the users');
    //     }
    //     console.log(users);
    // })

    db.collection('tasks').findOne({_id:new ObjectID("6065e37d88c0de41df2f8e3c")},(error,task)=>{
        if (error){
            return console.log('unable to fetch the task');
        }
        console.log(task);
    })

    db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
        if (error){
            return console.log('unable to fetch the tasks');
        }
        console.log(tasks);
    })
  }
);

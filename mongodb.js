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
    console.log("connected successfully");
    const db = client.db(database);
    // db.collection('users').insertMany([
    //   {
    //     name:'Rehmat',
    //     age:26
    //   },
    //   {
    //     name:'Huzaifa',
    //     age:27
    //   },
    //   {
    //     name:'sohrab',
    //     age:22
    //   },
    //   {
    //     name:'Amjad',
    //     age:27
    //   }
    // ],(error,results)=>{
    //   if (error){
    //     return console.log('Unable to insert the documents..');
    //   }
    //   console.log(results.ops);
    // });
    // db.collection('tasks').insertMany([
    //   {
    //     description:'clean the room',
    //     completed:false
    //   },
    //   {
    //     description:'make node notes',
    //     completed:true
    //   },
    //   {
    //     description:'play pubg',
    //     completed:true
    //   },
    //   {
    //     description:'call home',
    //     completed:false
    //   }
    // ],(error,results)=>{
    //   if (error){
    //     return console.log('Unable to insert the documents..');
    //   }
    //   console.log(results.ops);
    // });
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

    // db.collection('tasks').findOne({_id:new ObjectID("6065fe7885002908acaf3d82")},(error,task)=>{
    //     if (error){
    //         return console.log('unable to fetch the task');
    //     }
    //     console.log(task);
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,tasks)=>{
    //     if (error){
    //         return console.log('unable to fetch the tasks');
    //     }
    //     console.log(tasks);
    // })

    // db.collection('users').updateOne({
    //   _id:new ObjectID('6065fe7885002908acaf3d7d')
    // },{
    //   $inc:{
    //     age:2
    //   }
    // }).then((result)=>{
    //   console.log(result);
    // }).catch((error)=>{
    //   console.log(error);
    // })

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);

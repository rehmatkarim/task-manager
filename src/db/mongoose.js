const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("Email is not Valid");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw Error("Age must be positive number");
      }
    },
  },
});

const Task = mongoose.model("Task", {
  discription: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const me = new User({
  name: "   Rehmat",
  email: "REHMAT@GMAIL.COM",
});
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// const task_1 = new Task({
//   discription: "make tea",
//   completed: true,
// });
// task_1
//   .save()
//   .then(() => {
//     console.log(task_1);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

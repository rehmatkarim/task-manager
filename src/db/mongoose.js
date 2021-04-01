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
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 7,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw Error("password text should not contain password");
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
    required: true,
    trim:true
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const me = new User({
  name: "   jeddy",
  email: "jed@GMAIL.COM",
  password: "happyBirthday",
});
me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const task_1 = new Task({
  discription: "make node notes",
});
task_1
  .save()
  .then(() => {
    console.log(task_1);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

const mongoose = require("mongoose");
const { v4: uuidv4, uuid } = require("uuid");
const { regex } = require("uuidv4");

main()
  .then(() => {
    console.log("connection succesfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/emp");
}

let empschema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
  },
  Age: {
    type: Number,
    require: true,
  },
  Salary: {
    type: Number,
    require: true,
  },
  Gender: {
    type: String,
    require: true,
    enum: ["male", "female"],
  },
  Office_Join_Time: {
    type: Date,
    default: Date.now(),
  },
  Hobby:{
    type:Array,
    default:[]
  }
});


let employee = mongoose.model("employee", empschema);
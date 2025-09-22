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

 employee.insertMany([{
  Name:"vinubhai",
  Age:25,
  Salary:25000,
  Gender:"male",
  Hobby:["coding","vollyball","reading"]
},{
  Name:"kishan",
  Age:24,
  Salary:27500,
  Gender:"male",
  Hobby:["sleep","esoportsgame","anime"]
},{
  Name:"janki",
  Age:22,
  Salary:15000,
  Gender:"female",
  Hobby:["walking","reading","running"]
},{
  Name:"priya",
  Age:23,
  Salary:35000,
  Gender:"female",
  Hobby:["movies","yoga","cooking"]
}])


let Salary1 = 25000
let Salary2 = 35000
employee.find({Salary:{$gte:Salary1,$lte:Salary2}}).then((res)=>{
  console.log(res);
  
}).catch((err)=>{
  console.log(err);
  
})
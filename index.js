const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection succesfully");
    
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

 
}

const userschema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number
})

const employee = mongoose.model("employee",userschema)
// employee.insertMany([
//   {name:"pritham",email:"pritham@gmail.com",age:23},
//   {name:"keshav",email:"keshav345@gmail.com",age:26},
//   {name:"priya",email:"priya44@gmail.com",age:23}
// ]).then(res =>{
//   console.log(res);
  
// })
// employee.find({age:{$gt:23}}).then(res =>{
//   console.log(res);
  
// })
// const user1 = new employee({
//   name:"hitesh",
//   email:"hitesh@gmail.com",
//   age:19,

// })

// user1.save().then( res =>{
//   console.log(res);
  
// }).catch(err => {
  
//   console.log(err);
// })

// employee.updateOne({name:"keshav"},{name:"krishna"}).then(res=>{
//   console.log(res);
  
// })
// employee.deleteOne({name:"pritham"}).then(res=>{
//   console.log(res);
  
// }).catch(err =>{
//   console.log(err);
  
// })
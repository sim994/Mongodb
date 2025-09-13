const mongoose = require("mongoose");
const { v4: uuidv4,uuid} = require("uuid");

main()
  .then(() => {
    console.log("connection succesfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

let userschema = new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        maxlength:35,
        required:true
    },
    password:{
        type:Number,
        required:true

    }
})

let user1 = mongoose.model("user1",userschema);

//  let us = new user1({
     
//     id: uuidv4(),
//     email: "vinubhai333@gmail.com",
//     password: 343443
  
// })

// us.save().then((res)=>{
//     console.log("data are saved succefuly");
//     console.log(res);
    
    
// }).catch((err) =>{
//   console.log("something went wrong",err);
  
// })

 user1.insertMany([
  {
    id: uuidv4(),
    email: "hiren333@gmail.com",
    password: 343443,
  },
  {
    id: uuidv4(),
    email: "jainam534@gmail.com",
    password: 398954,
  },
  {
    id: uuidv4(),
    email: "akash@gmail.com",
    password: 249594,
  }
])

// user1.then((res) =>{
//     console.log(res);
//     console.log("data are saved succefully"); 
// }).catch(err =>{
//     console.log("we have error to insert data in database");
    
// })

// user1.updateOne({password:398954},{password:100000}).then((res) =>{
//     console.log(res);
//     console.log("data are saved succefully"); 
// }).catch(err =>{
//     console.log("we have error to insert data in database");
    
// })

// user1.deleteOne({email:"hiren333@gmail.com"}).then((res) =>{
//     console.log(res);
//     console.log("data are saved succefully"); 
// }).catch(err =>{
//     console.log("we have error to insert data in database");
    
// })

const mongoose = require('mongoose');

main().then(()=>{
    console.log("connection succesfully");
    
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/product');

 
}


const productschema = new mongoose.Schema({
  name:{
    type:String,
    require:true,
  },
  price:{
    type:Number,
  },
  country:{
    type:String,
    require:true,
  }
})

const productInfo = mongoose.model("productInfo",productschema)

const product1 = new productInfo({
    name:"sumsung galaxy s23 ultra",
    price:115000,
    country:"Korea"
})
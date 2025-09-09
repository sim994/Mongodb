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
    maxLength:20,
    minLength:5
  },
  price:{
    type:Number,
    default:0
  },
  country:{
    type:String,
    require:true,
    enum:["India","Chaina","America","UAE","Russia"]
  }
})

const productInfo = mongoose.model("productInfo",productschema)

const product1 = new productInfo([
    {
    name: "iPhone 14",
    price: 79999,
    country: "America"
  },
  {
    name: "Samsung Galaxy S23",
    price: 74999,
    country: "Chaina"
  },
  {
    name: "OnePlus 11",
    price: 59999,
    country: "India"
  },
  {
    name: "Dell XPS Laptop",
    price: 99999,
    country: "America"
  },
  {
    name: "Tata Nexon EV",
    price: 1400000,
    country: "India"
  },
  {
    name: "Huawei MateBook",
    price: 65000,
    country: "Chaina"
  },
  {
    name: "Emirates Perfume",
    price: 12000,
    country: "UAE"
  },
  {
    name: "Russian Vodka",
    price: 3500,
    country: "Russia"
  },
  {
    name: "Nike Air Jordan",
    price: 18000,
    country: "America"
  },
  {
    name: "Hyundai Creta",
    price: 1100000,
    country: "India"
  }
])

product1.save().then( res=>{
    console.log(res);
    
}).catch(err =>{
    console.log(err);
    
})


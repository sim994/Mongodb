const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection succesfully");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userschema = new mongoose.Schema({
  name: String,
  class: String,
  totalMarks: Number,
  greade: String,
  age: Number,
  city: String,
  gender: String,
});

const StudentData = mongoose.model("StudentData", userschema);

StudentData.insertMany([
  {
    name: "Aarav Patel",
    class: "10th",
    totalMarks: 450,
    greade: "A",
    age: 15,
    city: "Ahmedabad",
    gender: "Male",
  },
  {
    name: "Priya Sharma",
    class: "9th",
    totalMarks: 420,
    greade: "B",
    age: 14,
    city: "Mumbai",
    gender: "Female",
  },
  {
    name: "Rohan Mehta",
    class: "11th",
    totalMarks: 480,
    greade: "A+",
    age: 16,
    city: "Delhi",
    gender: "Male",
  },
  {
    name: "Sneha Verma",
    class: "12th",
    totalMarks: 390,
    greade: "C",
    age: 17,
    city: "Jaipur",
    gender: "Female",
  },
  {
    name: "Karan Singh",
    class: "10th",
    totalMarks: 460,
    greade: "A",
    age: 15,
    city: "Lucknow",
    gender: "Male",
  },
  {
    name: "Ananya Das",
    class: "9th",
    totalMarks: 400,
    greade: "B",
    age: 14,
    city: "Kolkata",
    gender: "Female",
  },
  {
    name: "Vikram Yadav",
    class: "11th",
    totalMarks: 470,
    greade: "A",
    age: 16,
    city: "Chennai",
    gender: "Male",
  },
  {
    name: "Neha Gupta",
    class: "12th",
    totalMarks: 430,
    greade: "B",
    age: 17,
    city: "Pune",
    gender: "Female",
  },
  {
    name: "Amit Kumar",
    class: "10th",
    totalMarks: 490,
    greade: "A+",
    age: 15,
    city: "Hyderabad",
    gender: "Male",
  },
  {
    name: "Ritika Joshi",
    class: "9th",
    totalMarks: 350,
    greade: "C",
    age: 14,
    city: "Bhopal",
    gender: "Female",
  },
  {
    name: "Sahil Khan",
    class: "11th",
    totalMarks: 410,
    greade: "B",
    age: 16,
    city: "Surat",
    gender: "Male",
  },
  {
    name: "Meera Iyer",
    class: "12th",
    totalMarks: 460,
    greade: "A",
    age: 17,
    city: "Coimbatore",
    gender: "Female",
  },
  {
    name: "Raj Malhotra",
    class: "10th",
    totalMarks: 380,
    greade: "C",
    age: 15,
    city: "Nagpur",
    gender: "Male",
  },
  {
    name: "Divya Rathi",
    class: "9th",
    totalMarks: 440,
    greade: "B+",
    age: 14,
    city: "Indore",
    gender: "Female",
  },
  {
    name: "Arjun Nair",
    class: "11th",
    totalMarks: 495,
    greade: "A+",
    age: 16,
    city: "Trivandrum",
    gender: "Male",
  },
  {
    name: "Simran Kaur",
    class: "12th",
    totalMarks: 470,
    greade: "A",
    age: 17,
    city: "Amritsar",
    gender: "Female",
  },
  {
    name: "Mohit Agarwal",
    class: "10th",
    totalMarks: 410,
    greade: "B",
    age: 15,
    city: "Kanpur",
    gender: "Male",
  },
  {
    name: "Pooja Mishra",
    class: "9th",
    totalMarks: 390,
    greade: "C",
    age: 14,
    city: "Patna",
    gender: "Female",
  },
  {
    name: "Aditya Roy",
    class: "11th",
    totalMarks: 450,
    greade: "A",
    age: 16,
    city: "Guwahati",
    gender: "Male",
  },
  {
    name: "Kavya Pillai",
    class: "12th",
    totalMarks: 480,
    greade: "A+",
    age: 17,
    city: "Kochi",
    gender: "Female",
  },
])
// using operator 

// StudentData.find({totalMarks:{$gt:450}}).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("this file is not working");
//   });

// update one data

//   StudentData.updateOne({name:"Kavya Pillai"},{name:"Kavya"}).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("this file is not working");
//   });

// update many  data

//   StudentData.updateOne({totalMarks:{$lt:500},{age:{$gt:17}}).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("this file is not working");
//   });

// find one  update data

//   StudentData.findOneAndUpdate({name:"Pooja Mishra"},{name:"Pooja"},{new:true}).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("this file is not working");
//   });


// delete one data

//   StudentData.deleteOne({name:"Sahil Khan"}).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("this file is not working");
//   });

// delete mant data

//   StudentData.deleteMany({totalMarks:{$lte:440}}).then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("this file is not working");
//   });
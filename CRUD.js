const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const app = express();
const sd = require("./StudentSchema.js");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

main()
  .then((res) => {
    console.log("connection succefuly");
  })
  .catch((err) => {
    console.log("something went wong");
  });
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sd");
}

const port = 3000;

// let data = [
//   {
//     id: uuidv4(),
//     fullname: "vaibhav",
//     age: 16,
//     address: "visavadar",
//     grades: "B",
//     TotalMarks: 390,
//   },
//   {
//     id: uuidv4(),
//     fullname: "ajay",
//     age: 23,
//     address: "palitana",
//     grades: "A",
//     TotalMarks: 450,
//   },
//   {
//     id: uuidv4(),
//     fullname: "shubham",
//     age: 22,
//     address: "palitana",
//     grades: "B",
//     TotalMarks:367,
//   },
// ];

app.listen(port, () => {
  console.log("server are started");
});

app.get("/create", async (req, res) => {
  let data = await sd.create({
    id: uuidv4(),
    fullname: "shubham",
    age: 22,
    address: "palitana",
    grades: "B",
    TotalMarks:367
  });

  data.save();
  res.send(data);
});
app.get("/read", async (req, res) => {
  let data = await sd.find();

  //  data.save();
  res.send(data);
});
app.get("/delete", async (req, res) => {
  let data = await sd.findOneAndDelete({ fullname: "vaibhav" });
  data.save();
  res.send(data);
});

app.get("/delete/:name", async (req, res) => {
  let { name } = req.params;
  let data = await sd.findOneAndDelete({ fullname: `${name}` });
  data.save();
  res.send(data);
});

app.get("/update", async (req, res) => {
  try {
    const data = await sd.findOneAndUpdate(
      { fullname: "ajay" },      // search condition
      { fullname: "darshan" },   // update
      { new: true }              // return updated document
    );

    if (!data) {
      return res.status(404).send({ message: "Document not found" });
    }

    res.send(data); // already saved in DB
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).send({ message: "Failed to update", error: err.message });
  }
});
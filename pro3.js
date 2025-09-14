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


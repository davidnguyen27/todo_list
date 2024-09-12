const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("Connect DB successful");
  } catch (error) {
    console.log("Connect DB failure " + error.message);
  }
}

module.exports = connectDB;

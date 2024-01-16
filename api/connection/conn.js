let mongoose = require("mongoose");
let dotenv = require("dotenv");

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MongoUrl);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectToDatabase;

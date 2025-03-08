const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Change if using MongoDB Atlas
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB ✅");
    return client.db("crypto_wallet_app"); // Change DB name if needed
  } catch (error) {
    console.error("MongoDB Connection Error ❌", error);
  }
}

module.exports = connectDB;

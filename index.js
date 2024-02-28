const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Define a schema for your data
const Schema = mongoose.Schema;
const signupSchema = new Schema({
  Username: String,
  Email: String,
  Password: Number, // Assuming password is stored as a number
});

// Create a model based on the schema
const Signup = mongoose.model("Signup", signupSchema);

mongoose
  .connect("mongodb://localhost:27017/job_portal", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");

    // Insert data into MongoDB collection
    const initialData = [
      { Username: "abc", Email: "abc@gmail.com", Password: 123 },
      { Username: "def", Email: "def@gmail.com", Password: 456 },
      { Username: "ghi", Email: "ghi@gmail.com", Password: 789 }
    ];

    Signup.insertMany(initialData)
      .then(() => console.log("Initial data inserted successfully"))
      .catch((error) => console.error("Error inserting initial data:", error));

    // Start the server after successful database connection
    startServer();
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB:", error);
  });

function startServer() {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
  });

  app.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
     // console.error(Port ${PORT} is already in use);
    } else {
      console.error("An error occurred while starting the server:", err);
    }
    process.exit(1);
  });
}
const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb://localhost:27017/job_portal", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Successfully connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB:", error);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});




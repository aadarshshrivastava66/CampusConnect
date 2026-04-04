const mongoose = require("mongoose");
const courseModel = require("../Models/courseModel");
const courses = require("./courseData");

mongoose.connect(process.env.MongoUrl)
  .then(async () => {
    await courseModel.insertMany(courses);
    console.log("Courses inserted successfully");
    process.exit();
  })
  .catch(err => console.log(err));
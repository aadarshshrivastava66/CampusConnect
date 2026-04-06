const courseModel = require("../Models/courseModel");

module.exports.ugCourses = async (req, res) => {
  try {
    const ugCourses = await courseModel.find({ degreeType: "UG" });
    res.status(200).json(ugCourses);
  } catch (err) {
    console.log(err);
    console.log("some error come");
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports.pgCourses = async (req, res) => {
  try {
    const pgCourses = await courseModel.find({ degreeType: "PG" });
    res.status(200).json(pgCourses);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports.courseDetail = async (req, res) => {
  try {
    const id = req.params.id;
    const courseDetail = await courseModel.findById(id);
    if (!courseDetail) {
      return res.status(400).json({ message: "Course not found" });
    }
    res.status(200).json(courseDetail);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message:"Server Error come" });
  }
};

//check later when frontend part done
module.exports.newCourse = async (req, res) => {
  const {
    courseId,
    courseName,
    courseCode,
    degreeType,
    department,
    description,
    duration,
    totalSemesters,
    eligibility,
    fees,
    seats,
    HOD,
  } = req.body;
  try{
    if (
    !courseId ||
    !courseName ||
    !courseCode ||
    !degreeType ||
    !department ||
    !duration ||
    !totalSemesters ||
    !eligibility?.qualification ||
    !fees?.totalFees ||
    !seats?.totalSeats
  ) {
    return res.status(400).json({
      success: false,
      message: "Please fill all required fields",
    });
  }
  const existingCourse = await courseModel.findOne({ courseId });

    if (existingCourse) {
      return res.status(400).json({
        success: false,
        message: "Course with this ID already exists"
      });
    }
  const newCourse = new courseModel({
    courseId,
    courseName,
    courseCode,
    degreeType,
    department,
    description,
    duration,
    totalSemesters,
    eligibility,
    fees,
    seats,
    HOD,
  });
  await newCourse.save();
  res.status(201).json({message:"New Course Created Successfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({message:"Server Error come"})
  }
};

module.exports.removeCourse=async(req,res)=>{
    
    try{
        const id=req.params.id;
        const course=await courseModel.findById(id);
        if(!course){
            return res.status(400).json({message:"Course Not Found"});
        }
        await courseModel.findByIdAndDelete(id);
        res.status(200).json({message:"Course Removed SuccessFully"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error come"})
    }
}

module.exports.updateCourse = async (req, res) => {
  try {
    const id = req.params.id;

    console.log("ID:", id);
    console.log("BODY:", req.body);

    const updatedCourse = await courseModel.findByIdAndUpdate(
      id,
      req.body,
      {
        returnDocument: "after",
        runValidators: true
      }
    );

    if (!updatedCourse) {
      return res.status(404).json({
        success: false,
        message: "Course not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      data: updatedCourse
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

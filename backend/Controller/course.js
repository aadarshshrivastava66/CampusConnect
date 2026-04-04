const courseModel=require('../Models/courseModel');


module.exports.ugCourses=async(req,res)=>{
    try{
         const ugCourse=await courseModel.find({degreeType:"UG"});
        res.send(ugCourse);
    }catch(err){
        console.log(err);
        console.log("some error come");
        res.status(500).send("Server Error");
    }
   
}
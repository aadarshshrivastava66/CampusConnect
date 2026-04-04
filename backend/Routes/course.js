const express=require('express');
const router=express.Router();

const courseController=require('../Controller/course')

router.get('/ugCourse',courseController.ugCourses)

module.exports=router;
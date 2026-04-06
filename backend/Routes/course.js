const express=require('express');
const router=express.Router();

const courseController=require('../Controller/course');

router.get('/ugcourses',courseController.ugCourses);

router.get('/pgcourses',courseController.pgCourses);

router.post('/newcourse',courseController.newCourse);

router.patch("/updatecourse/:id", courseController.updateCourse);

router.delete('/:id',courseController.removeCourse);

router.get('/:id',courseController.courseDetail);



module.exports=router;
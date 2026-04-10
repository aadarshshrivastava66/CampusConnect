const express=require('express');
const router=express.Router();
const userController=require('../Controller/user');

router.post('/register',userController.Register);

router.post('/login',userController.LogInUser);

router.get('/logout',userController.Logout);

module.exports=router;
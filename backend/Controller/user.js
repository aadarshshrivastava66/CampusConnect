const userModel=require('../Models/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')

module.exports.Register=async(req,res)=>{
    try{
        const{name,email,password,phone}=req.body;
        if(!name||!email||!password){
           return res.status(400).json({message:"Please Fill All Required Fileds"});
        }
        const user=await userModel.findOne({email});
        if(user){
            return res.status(400).json({message:"User Already Present please try with different email id"});
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const newUser=new userModel({
            name,
            email,
            password:hashedpassword,
            phone
        })
        await newUser.save();
        res.status(201).json({message:"New User Saved Successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error Come"});
    }
}

module.exports.LogInUser=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email || !password){
           return res.status(400).json({message :"Please Fill All Required Field"});
        }
        const user=await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message:"User Not Found please Enter Correct Email Id"});
        }
        const iscorrect=await bcrypt.compare(password,user.password);
        if(!iscorrect){
            return res.status(400).json({message:"You Enter Incorrect Password"});
        }
       const token= jwt.sign({userId:user._id,role:user.role},
        "mySerectKey",
        {
            expiresIn:'1d'
        }
        );
        res.cookie("token",token,{
            httpOnly:true,
            secure:false,
            maxAge: 24 * 60 * 60 * 1000,
        })
        res.status(200).json({message:"user LoggedIn Successfully",userId:user._id,role:user.role});

    }catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error Come"});
    }
}

module.exports.Logout=(req,res)=>{
    res.clearCookie('token');
    res.status(200).json({message:"Logout Successfully"});
}
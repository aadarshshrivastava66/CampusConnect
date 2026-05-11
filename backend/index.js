const express=require('express');
const app=express()
const cors=require('cors');
const cookieParser=require('cookie-parser')
const mongoose=require('mongoose');
const dotenv=require('dotenv');


dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)

const url=process.env.MongoUrl

mongoose.connect(url)
.then(()=>{
    console.log("Connected With DB");
}).catch((err)=>{
    console.log(err);
    console.log("some error come");
})

const courseRoute=require('./Routes/course');
app.use('/courses',courseRoute);

const noticeRoute=require('./Routes/Notice');
app.use('/notice',noticeRoute);

const adminRoute=require('./Routes/user');
app.use('/admin',adminRoute);

const chatbotRoute=require('./Routes/chatbot');
app.use('/chatbot',chatbotRoute);

const enquiryRoute = require("./Routes/enquiry");
app.use("/enquiry", enquiryRoute);

app.listen(8080,()=>{
    console.log("serever is Running on port 8080");
})
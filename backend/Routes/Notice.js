const express=require('express')
const router=express.Router();
const noticeController=require('../Controller/Notice');
const {upload,uploadFile}=require('../Middleware.js/uplode')

router.post('/uploadenotice',upload.single("file"),uploadFile,noticeController.uploadeNotice)

module.exports=router;
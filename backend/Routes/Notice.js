const express=require('express');
const router=express.Router();
const noticeController=require('../Controller/Notice');
const {upload,uploadFile}=require('../Middleware.js/uplode')

router.post('/uploadenotice',upload.single("file"),uploadFile,noticeController.uploadeNotice);

router.get('/generalnotice',noticeController.viewGenralNotice);

router.get('/feesnotice',noticeController.viewFeesNotice);

router.get('/scholarshipnotice',noticeController.viewScholarshipNotice);

router.get('/sportsnotice',noticeController.viewSportsNotice);

router.get('/detail/:id',noticeController.noticeDetail);

router.delete("/delete/:id",noticeController.deleteNotice);


module.exports=router;
const mongoose = require("mongoose");
const noticeModel = require("../Models/noticeModel");
const {GridFSBucket}=require('mongodb');

module.exports.uploadeNotice = async (req, res) => {
  try {
    const { title, description, noticeType, isActive } = req.body;
    if (!req.fileId) {
      console.log("File Id not come");
      return res.status(400).json({ message: "File not uploaded" });
    }
    const notice = new noticeModel({
      title,
      description,
      noticeType,
      isActive: isActive === "true",
      file: {
        fileName: req.file.originalname,
        fileId: req.fileId,
      },
    });
    await notice.save();
    console.log("Notice Saved Successfully");
    res.status(201).json({
      message: "Notice uploaded successfully",
      notice,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports.viewGenralNotice = async (req, res) => {
  try {
    const notice = await noticeModel.find({ noticeType: "General" });

    if (notice.length === 0) {
      return res.status(404).json({ message: "No General Notices Found" });
    }

    res.status(200).json(notice);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports.viewFeesNotice = async (req, res) => {
  try {
    const notice = await noticeModel.find({ noticeType: "Fee" });

    if (notice.length === 0) {
      return res.status(404).json({ message: "No Fees Notices Found" });
    }

    res.status(200).json(notice);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports.viewScholarshipNotice = async (req, res) => {
  try {
    const notice = await noticeModel.find({ noticeType: "Scholarship" });

    if (notice.length === 0) {
      return res.status(404).json({ message: "No Scholarship Notices Found" });
    }

    res.status(200).json(notice);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports.viewSportsNotice = async (req, res) => {
  try {
    const notice = await noticeModel.find({ noticeType: "Sports" });

    if (notice.length === 0) {
      return res.status(404).json({ message: "No Sports Notices Found" });
    }

    res.status(200).json(notice);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

module.exports.noticeDetail=async(req,res)=>{

  try{
    const fileId=new mongoose.Types.ObjectId(req.params.id);
    
    if(!fileId){
      return res.status(400).json({message:"Incorrect File"});
    }
   const bucket=new GridFSBucket(mongoose.connection.db,{
    bucketName:'uplodeFiles'
   })

   const downloadStream=bucket.openDownloadStream(fileId);
   

   downloadStream.on('error',()=>{
    return res.status(400).json({message:"file not found"});
   })

   downloadStream.pipe(res);

  }catch(err){
    console.log(err);
     res.status(500).send("server error")
  }
}

module.exports.deleteNotice = async (req, res) => {
  try {
    const noticeId = req.params.id;

   
    const notice = await noticeModel.findById(noticeId);

    if (!notice) {
      return res.status(404).json({ message: "Notice not found" });
    }

    //delete from GridFbucket
    if (notice.file && notice.file.fileId) {
      const fileId = new mongoose.Types.ObjectId(notice.file.fileId);

      const bucket = new GridFSBucket(mongoose.connection.db, {
        bucketName: "uplodeFiles" 
      });

      try {
        await bucket.delete(fileId);
      } catch (err) {
        console.log("File delete error:", err.message);
        return res.status(400).json({ message: "File not found in GridFS" });
      }
    }

    // Delete from NoticeCollection
    await noticeModel.findByIdAndDelete(noticeId);

    res.status(200).json({
      message: "Notice and file deleted successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};


const mongoose = require("mongoose");
const noticeModel = require("../Models/noticeModel");

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

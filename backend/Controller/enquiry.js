const Enquiry = require("../Models/enquiry");



const createEnquiry = async (req, res) => {
  try {
    const { name, phone, category, enquiry } = req.body;

    // Validation
    if (!name || !phone || !category || !enquiry) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save Data
    const newEnquiry = new Enquiry({
      name,
      phone,
      category,
      enquiry,
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry Submitted Successfully",
      data: newEnquiry,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};



const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
};
const express = require("express");

const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries,
} = require("../Controller/enquiry");


// Create Enquiry
router.post("/", createEnquiry);

// Get All Enquiries
router.get("/", getAllEnquiries);

module.exports = router;
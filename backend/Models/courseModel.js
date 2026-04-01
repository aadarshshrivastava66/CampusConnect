const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const courseSchema=new Schema({
    courseId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  courseName: {
    type: String,
    required: true,
    trim: true
  },

  courseCode: {
    type: String,
    required: true,
    uppercase: true
  },

  degreeType: {
    type: String,
    enum: ["UG", "PG"],
    required: true
  },

  department: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  duration: {
    type: String, 
    required: true
  },

  totalSemesters: {
    type: Number,
    required: true
  },

  eligibility: {
    qualification: {
      type: String,
      required: true
    },
    minPercentage: {
      type: Number
    },
    entranceExamRequired: {
      type: Boolean,
      default: false
    },
    examName: {
      type: String
    }
  },

  fees: {
    totalFees: {
      type: Number,
      required: true
    },
    perYear: {
      type: Number
    },
    perSemester: {
      type: Number
    }
  },

  seats: {
    totalSeats: {
      type: Number,
      required: true
    },
    availableSeats: {
      type: Number
    }
  },

  HOD: {
    name: String,
    email: String
  },

  status: {
    type: String,
    enum: ["Active", "Closed"],
    default: "Active"
  }
},
 {
  timestamps: true
}
)

module.exports=mongoose.Schema("courseModel",courseSchema);
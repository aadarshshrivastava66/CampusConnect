const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const noticeSchema=new Schema({
    title: {
    type: String,
    required: true,
    trim: true
  },

  description: {
    type: String,
    required: true
  },

  noticeType: {
    type: String,
    enum: ["General", "Fee", "Scholarship", "Sports"],
    required: true
  },

  attachments: [
    {
      fileName: String,
      fileUrl: String
    }
  ],

  importantDates: {
    startDate: Date,
    endDate: Date
  },

  isActive: {
    type: Boolean,
    default: true
  }
},{
    timestamps:true
})

module.exports=mongoose.model("noticeModel",noticeSchema);
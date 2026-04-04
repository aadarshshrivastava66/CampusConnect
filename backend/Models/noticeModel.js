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

  file: {
      fileName: String,
      fileId: mongoose.Schema.Types.ObjectId,
    },


  isActive: {
    type: Boolean,
    default: true
  }
},{
    timestamps:true
})

module.exports=mongoose.model("noticeModel",noticeSchema);
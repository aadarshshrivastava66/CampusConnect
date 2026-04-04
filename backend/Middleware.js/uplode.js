const {GridFSBucket}=require('mongodb');
const multer=require('multer');
const mongoose=require('mongoose');
const {Readable}=require('stream');

const conn=mongoose.connection;

let gridfsBucket;
//create a GridFS Bucket to uploade files
conn.once('open',()=>{
    console.log("MongoDb connect open");
    gridfsBucket=new GridFSBucket(conn.db,{
        bucketName:'uplodeFiles'
    });
    console.log("Bucket ready to upload file")
});

//create a temporary storage in ram to store a files
const storage=multer.memoryStorage();
const upload=multer({storage})

const uploadFile=async(req,res,next)=>{
    if(!req.file){
        console.log("file not come");
        next();
    }
    try{
        console.log(req.file)
        //create a readable stream
        const stream=Readable.from(req.file.buffer);
        //create a writeable stream
        const uploadStream=gridfsBucket.openUploadStream(req.file.originalname,{
            contentType:req.file.mimetype,  
        })
        //upload files in chunks with the help of pipeLine
        stream.pipe(uploadStream)
        .on('error',(err)=>next(err))
        .on('finish',()=>{
            req.fileId=uploadStream.id;
            next();
            
        })

    }catch(err){
        next(err);
    }
}

module.exports={upload,uploadFile}

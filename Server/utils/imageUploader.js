const cludinary=require('cloudinary').v2


exports.uploadImageToCloudinary=async(file,folder,quality,height)=>{
    const options={folder}
    if(height){
        options.height=height;
    }
    if(quality){
        options.quality=quality;
    }
    options.resource_type="auto"
    return await cludinary.uploader.upload(file.tempFilePath,options);
}

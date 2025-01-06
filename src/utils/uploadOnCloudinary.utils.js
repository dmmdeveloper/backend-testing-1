import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv"
import { unlinkSync} from "node:fs"


// Cloudianry Configuration 

dotenv.config({path:".env"})

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET
})



export const uploadOnCloudinary = async (filePath)=>{

    if( !filePath ) return ;
try {
const response = await cloudinary.uploader.upload(filePath)
unlinkSync(filePath)

return response.url

} catch (error) {
    console.log("File not Uploaded On Cloudinary !!!" , error);
unlinkSync(filePath)

    return null;   
}



}
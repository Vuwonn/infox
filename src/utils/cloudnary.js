import { v2 as cloudinary } from 'cloudinary';
import {fs} from  'fs'


    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDNARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    });

    const cloudinaryUpload = async (localFile) => {
        try {
            if(!localFile) return null;

            const response = await cloudinary.uploader.upload(localFile, {
                resource_type: "auto",
            });
            console.log( 'file  uploaded successfully',response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFile);
            return null;
        }
       
    }


export default cloudinaryUpload

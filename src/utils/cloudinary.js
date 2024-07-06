import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // if we will find out path then we will upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // now file will be upload successfullly
    console.log("file is uploaded on cloudinary", response);
    return response;
  } catch (error) {
    // if  we got in catch block means there is mistakes for not upload on  cloudinary,means we got the file in our local system so remove it

    fs.unlinkSync(localFilePath);
    return null;
  }
};

// Upload an image
await cloudinary.v2.uploader.upload(
  "https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg",
  {
    public_id: "shoes",
  },
  function (error, result) {
    console.log(result);
  }
);

export { uploadOnCloudinary };

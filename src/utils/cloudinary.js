import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINRY_CLOUD_NAME,
  api_key: process.env.CLOUDINRY_AIP_KEY,
  api_secret: process.CLOUDINRY_API_SECRET,
});

const upoadOmcloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinarylocalFilePath
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //  the file  upload successfull
    console.log("file is uploaded on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

// cloudinary.uploader.upload(
//   "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" },
//   function (error, result) {
//     console.log(result);
//   }
// );

export { upoadOmcloudinary };

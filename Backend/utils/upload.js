import CloudinaryStorage from "multer-storage-cloudinary";
import multer from "multer";
import cloudinary from "./cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "AsquarezStore",
    all_formats: ["jpg", "png", "jpeg"]
  },
});

const upload = multer({storage});

module.exports = upload;
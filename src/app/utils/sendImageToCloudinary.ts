// import { v2 as cloudinary } from 'cloudinary';
// import config from '../config';
// import multer from 'multer';
// export const sendImageToCloudinary = () => {
//   cloudinary.config({
//     cloud_name: config.cloud_name,
//     api_key: config.api_key,
//     api_secret: config.api_secret,
//   });

//   // Upload an image
//   const uploadResult = cloudinary.uploader.upload(
//     'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
//     {
//       public_id: 'shoes',
//     },
//     function (erro, result) {
//       console.log(result);
//     },
//   );
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, process.cwd() + '/uploads/');
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     cb(null, file.fieldname + '-' + uniqueSuffix);
//   },
// });

// export const upload = multer({ storage: storage });

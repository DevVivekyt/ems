let multer = require("multer");
let fs = require("fs");

// Create the uploads directory if it doesn't exist
const uploadDirectory = "uploads";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Upload Images
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDirectory);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + "-" + Date.now() + ".png");
    },
  }),
}).single("profilePic");

module.exports = upload;

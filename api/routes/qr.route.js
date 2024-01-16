let express = require("express");
let { generateQrValue, getAllQr } = require("../controllers/qr.controller.js");

const router = express.Router();

// Create Qr Value
router.get("/generateQr", generateQrValue);
router.get("/getQr", getAllQr);

module.exports = router;

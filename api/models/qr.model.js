let mongoose = require("mongoose");

const qrCodeSchema = new mongoose.Schema({
  value: { type: String, required: true },
  expiration: {
    type: Date,
    required: true,
  },
  isExpired: { type: Boolean, required: true },
});

const QRCodeModel = mongoose.model("QRCode", qrCodeSchema);
module.exports = QRCodeModel;

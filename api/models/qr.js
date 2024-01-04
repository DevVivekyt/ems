import mongoose from "mongoose";

const qrCodeSchema = new mongoose.Schema({
  value: String,
  expiration: Date,
  isExpired: Boolean,
});

const QRCodeModel = mongoose.model("QRCode", qrCodeSchema);
export default QRCodeModel;

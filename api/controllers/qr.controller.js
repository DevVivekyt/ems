let crypto = require("crypto");
let QrCodeModal = require("../models/qr.model.js");
let { createError, createSuccess } = require("../middleware/response.js");
let cron = require("node-cron");

// Generate a random value
const generateRandomValue = () => {
  return crypto.randomBytes(16).toString("hex");
};

const generateQrValue = async (req, res) => {
  try {
    const randomValue = generateRandomValue();
    const expiration = new Date(Date.now() + 1 * 60 * 1000);
    const isExpired = expiration < new Date();

    // Store the data in MongoDB
    await QrCodeModal.create({ value: randomValue, expiration, isExpired });

    res.status(200).json(
      createSuccess("QR value generated", {
        randomValue,
        isExpired,
        expiration,
      })
    );
  } catch (error) {
    console.log("Error generating QR value", error);
    res.status(500).json(createError(`Error generating QR value: ${error}`));
  }
};

const getAllQr = async (req, res) => {
  try {
    const Value = await QrCodeModal.find();

    res.status(200).json(createSuccess("Retrieve Success", Value));
  } catch (error) {
    console.log(error);
  }
};

cron.schedule("*/1 * * * *", async () => {
  try {
    const currentDateTime = new Date();

    // Update documents where expiration is less than the current time
    await QrCodeModal.updateMany(
      { expiration: { $lt: currentDateTime }, isExpired: false },
      { $set: { isExpired: true } }
    );
  } catch (error) {
    console.error("Error updating expired records:", error);
  }
});

module.exports = { getAllQr, generateQrValue };

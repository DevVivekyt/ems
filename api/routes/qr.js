import express from "express";
import { generateQrValue, getAllQr } from "../controllers/qr.js";

const router = express.Router();

// Create Qr Value
router.post("/generateQr", generateQrValue);
router.get("/getQr", getAllQr);

export default router;

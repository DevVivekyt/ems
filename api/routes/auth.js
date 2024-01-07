import express from "express";
import { registerEmployee, retrieveEmployee } from "../controllers/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// Create Employee
router.post("/addEmployee", upload, registerEmployee);

// Get Employee
router.get("/employee", retrieveEmployee);

export default router;

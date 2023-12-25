import express from "express";
import { registerEmployee, retrieveEmployee } from "../controllers/auth.js";

const router = express.Router();

// Create Employee
router.post("/addEmployee", registerEmployee);

// Get Employee
router.get("/employee", retrieveEmployee);

export default router;

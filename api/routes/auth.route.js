let express = require("express");
let {
  registerEmployee,
  retrieveEmployee,
} = require("../controllers/auth.controller.js");
let upload = require("../middleware/upload.js");

const router = express.Router();

// Create Employee
router.post("/addEmployee", upload, registerEmployee);

// Get Employee
router.get("/employee", retrieveEmployee);

module.exports = router;

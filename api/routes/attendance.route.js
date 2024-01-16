const { userAttendance } = require("../controllers/attendance.controller");

let express = require("express");

const router = express.Router();

router.post("/attendance", userAttendance);

module.exports = router;

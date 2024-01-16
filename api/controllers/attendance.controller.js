const { createError, createSuccess } = require("../middleware/response");
let attendance = require("../models/attendance.model");
const Employee = require("../models/employe.model");
const QRCodeModel = require("../models/qr.model");

const userAttendance = async (req, res) => {
  const qrValue = req.body.qrValue;
  const empId = req.body.employeeId;

  try {
    const existingQrValue = await QRCodeModel.findOne({
      value: qrValue,
      isExpired: false,
    });

    if (existingQrValue) {
      const existingEmployee = await Employee.findById(empId);

      if (existingEmployee) {
        const newAttendance = await attendance.create(req.body);
        res.status(200).json(createSuccess("Attendance marked", newAttendance));
      } else {
        res.status(404).json(createError("Employee not found"));
      }
    } else {
      res.status(500).json(createError("QR has been expired"));
    }
  } catch (error) {
    res.status(500).json(createError(`Exception ${error}`));
  }
};

module.exports = { userAttendance };

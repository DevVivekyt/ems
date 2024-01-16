let mongoose = require("mongoose");

const attendanceSchema = mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: true,
    },
    employeeName: {
      type: String,
      required: true,
    },
    qrValue: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamp: true }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;

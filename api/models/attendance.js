import mongoose from "mongoose";

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
    date: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Attendance = mongoose.model("Attendance", attendanceSchema);
export default Attendance;

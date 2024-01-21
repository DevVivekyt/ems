import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "../slice/employee";
import QRReducer from "../slice/qrSlice";
import attendanceReducer from "../slice/attendance.slice";
export const store = configureStore({
  reducer: {
    employeeData: EmployeeReducer,
    qrData: QRReducer,
    attendance: attendanceReducer,
  },
});

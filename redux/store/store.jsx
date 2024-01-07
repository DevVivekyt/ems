import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "../slice/employee";
import QRReducer from "../slice/qrSlice";
export const store = configureStore({
  reducer: {
    employeeData: EmployeeReducer,
    qrData: QRReducer,
  },
});

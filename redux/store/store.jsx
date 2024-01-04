import { configureStore } from "@reduxjs/toolkit";
import EmployeeReducer from "../slice/employee";
export const store = configureStore({
  reducer: {
    employeeData: EmployeeReducer,
  },
});

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_Uri } from "../../lib/utils";

// Create Thunk
export const employeesAPI = createAsyncThunk(
  "getEmployee",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${Base_Uri}employee`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
// Slice
export const employeeSlice = createSlice({
  name: "employeeData",
  initialState: {
    empData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(employeesAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(employeesAPI.fulfilled, (state, action) => {
      (state.loading = false), (state.empData = action.payload.result);
    });
    builder.addCase(employeesAPI.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });
  },
});

export default employeeSlice.reducer;

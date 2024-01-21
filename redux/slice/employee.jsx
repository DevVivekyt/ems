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
export const saveemployees = createAsyncThunk(
  "saveemployees",
  async (empdata, thunkAPI) => {
    try {
      const response = await axios.post(`${Base_Uri}addEmployee`, empdata);
      console.log(response.data);
      return response.data;
    } catch (error) {
      const serializedError = {
        message: error.message,
        response: {
          status: error.response ? error.response.status : null,
          // Add other necessary fields
        },
      };
      return thunkAPI.rejectWithValue(serializedError);
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
    builder.addCase(saveemployees.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveemployees.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(saveemployees.rejected, (state, action) => {
      state.loading = false;

      const errorPayload = action.payload;

      state.error = {
        message: errorPayload.message,
        response: {
          status: errorPayload.response ? errorPayload.response.status : null,
          // Add other necessary fields
        },
        // Add other necessary fields
      };
    });
  },
});

export default employeeSlice.reducer;

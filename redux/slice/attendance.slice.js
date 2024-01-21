import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_Uri } from "../../lib/utils";

// Create Thunk
export const attendanceAPI = createAsyncThunk(
  "attendanceAPI",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${Base_Uri}attendance`, data);
      console.log("attendance", response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Slice
export const attendanceSlice = createSlice({
  name: "attendanceSlice",
  initialState: {
    attendance: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(attendanceAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(attendanceAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.attendance = action.payload.result;
      })
      .addCase(attendanceAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default attendanceSlice.reducer;

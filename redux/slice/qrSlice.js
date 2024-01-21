import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Base_Uri } from "../../lib/utils";

// create thunk

export const generateQrAPI = createAsyncThunk(
  "generateQrAPI",
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${Base_Uri}generateQr`);
      // console.log("QR APi", response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const QrValue = createSlice({
  name: "QrCode",
  initialState: {
    QrData: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(generateQrAPI.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(generateQrAPI.fulfilled, (state, action) => {
      (state.loading = false), (state.QrData = action.payload.result);
    });
    builder.addCase(generateQrAPI.rejected, (state, action) => {
      (state.loading = false), (state.error = action.payload);
    });
  },
});

export default QrValue.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSuitsData = createAsyncThunk('suits/getData', async (thunkAPI) => {
  return axios.get('http://localhost:3000/suits')
    .then (res => {
      return res.data
    })
    .catch(err => {
      console.log('err', err)
    })
});

export const suitsSlice = createSlice({
  name: 'suits',
  initialState: {
    loading: false,
    data: [],
    error: '',
    isSuccess: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getSuitsData.pending, state => {
      state.loading = true
      state.isSuccess = false
    });

    builder.addCase(getSuitsData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
      state.isSuccess = true
    });

    builder.addCase(getSuitsData.rejected, (state, action) =>{
      state.loading = false
      state.data = []
      state.error = action.error.message
      state.isSuccess = false
    });
  }
});

export default suitsSlice.reducer
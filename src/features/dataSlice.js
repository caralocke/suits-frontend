import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk('show/getData', async (show, thunkAPI) => {
  return axios.get(`http://localhost:3000/${show}`)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log('err', err)
      })
})

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    data: [],
    error: '',
    isSuccess: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.pending, state => {
      state.loading = true
      state.isSuccess = false
    });

    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = ''
      state.isSuccess = true
    });

    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false
      state.data = []
      state.error = action.error.message
      state.isSuccess = false
    })
  }
});

export default dataSlice.reducer
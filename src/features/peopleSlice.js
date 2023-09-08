import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPeople = createAsyncThunk('people/getPeople', async (thunkAPI) => {
  return axios.get('http://localhost:3000/people')
    .then(res => {
      console.log('getPeople res.data', res.data)
      return res.data
    })
    .catch(err=> {
      console.log('err', err)
    })
});

export const getPerson = createAsyncThunk('people/getPerson', async (id, thunkAPI) => {
  return await axios.get(`http://localhost:3000/people/${id}`)
    .then(res => {
      console.log('res.data', res.data)
      return res.data
    })
})

export const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    loading: false,
    people: [],
    error: '',
    isSuccess: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPeople.pending, state => {
      state.loading = true
    });

    builder.addCase(getPeople.fulfilled, (state, action) => {
      state.loading = false
      state.people = action.payload
      state.error = ''
      state.isSuccess = true
    });

    builder.addCase(getPeople.rejected, (state, action) => {
      state.loading = false
      state.people = []
      state.error = action.error.message
      state.isSuccess = false
    });

    builder.addCase(getPerson.pending, state => {
      state.loading = true
    });

    builder.addCase(getPerson.fulfilled, (state, action) => {
      state.loading = false
      state.person = action.payload
      state.error = ''
      state.isSuccess = true
    })

    builder.addCase(getPerson.rejected, (state, action) => {
      state.loading = false
      state.person = []
      state.error = action.error.message
      state.isSuccess = false
    })
  }
})

export default peopleSlice.reducer;
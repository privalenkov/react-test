import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    value: { header: 'Header', image: '',  isHeader: false, isImage: false,  postBody: 'Some post text', title: 'Title' },
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    }
  },
})

export const { set } = formSlice.actions

export default formSlice.reducer
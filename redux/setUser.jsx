import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState: { 
    firstTime: false,
  },
  reducers: {
    setFirstTime: (state, action) => {
      state.firstTime = action.payload;
    },
  },
});


export const { setFirstTime } = counterSlice.actions;
export default counterSlice.reducer;
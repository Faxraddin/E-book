import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'user',
  initialState: { 
    firstTime:true
  },
  reducers: {
    setFirstTime: (state,action) => {
        state.firstTime = action.payload.firstTime;
    }
  },
});

export const { setFirstTime } = counterSlice.actions;
export default counterSlice.reducer;
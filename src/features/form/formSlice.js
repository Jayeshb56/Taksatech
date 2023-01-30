import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  route: 0,
};

export const formSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        updateRoute: (state, action) => {
        state.route = action.payload
      },
      submitAlert:() => {
        alert("Your Form Submitted Succesfully")
      }
    },
});

export const {
    updateRoute,submitAlert,
  } = formSlice.actions;
  export default formSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  email: '',
  profileUrl: '',
  firebaseId: '',
};

const userSignUpSlice = createSlice({
  name: 'userSignUp',
  initialState,
  reducers: {
    setUserSignUpDetails: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.profileUrl = action.payload.profileUrl;
      state.firebaseId = action.payload.firebaseId;
    },
    resetUserSignUpDetails: (state) => {
      state.username = '';
      state.email = '';
      state.profileUrl = '';
      state.firebaseId = '';
    },
  },
});

export const { setUserSignUpDetails, resetUserSignUpDetails } = userSignUpSlice.actions;
export default userSignUpSlice.reducer;
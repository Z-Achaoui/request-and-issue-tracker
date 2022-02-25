import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    authorization: "",
    roles: [],
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loadUser: (state, action) => {
      state.value = action.payload;
    },
    resetUser: (state, action) => {
      state.value = initialState.value;
    },
  },
});

export const { loadUser, resetUser } = userSlice.actions;

export default userSlice.reducer;

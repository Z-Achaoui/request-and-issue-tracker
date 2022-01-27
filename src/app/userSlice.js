import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: 0,
      firstName: "",
      lastName: "",
      email: "",
    },
  },
  reducers: {
    loadUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { loadUser } = userSlice.actions;

export default userSlice.reducer;

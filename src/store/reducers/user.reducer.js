import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    nickname: "udemy",
    address: {
      city: "서울시 중구",
      street: "청계천로 24 B2층",
      zipCode: "04521",
    },
    email: "udemy@udemy.com",
    age: 33,
  },
  name: "user",
  reducers: {
    changeNickname(state, action) {
      state.nickname = action.payload.nickname;
    },
    changeAddress(state, action) {
      state.address = action.payload.address;
    },
    changeEmail(state, action) {
      state.email = action.payload.email;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { changeNickname, changeAddress, changeEmail } = userSlice.actions;

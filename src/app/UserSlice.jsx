import { createSlice } from "@reduxjs/toolkit";
import { use } from "react";
const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "mohan",
  },
  reducers: {
    changeName: (state) => {
      if (state.name == "mohan") {
        state.name = "reddy";
      } else if (state.name == "reddy") {
        state.name = "mohan";
      }
    },
  },
});
export const { changeName } = userSlice.actions;
export default userSlice.reducer;

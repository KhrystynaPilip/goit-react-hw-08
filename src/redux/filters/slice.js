import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { filter: "" },
  reducers: {
    setNameFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setNameFilter } = slice.actions;
export default slice.reducer;

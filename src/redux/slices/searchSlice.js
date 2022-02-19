import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {
    term: "",
  },
  reducers: {
    test: (state, action) => {
      console.log(action)
    },
  },
})

export const selectTerm = (state) => state.search.term
export const { test } = searchSlice.actions
export default searchSlice.reducer

import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
  name: "search",
  initialState: {
    term: "",
    searchResults: []
  },
  reducers: {
    test: (state, action) => {
      state.term = action.payload
    },
  },
})

export const selectTerm = (state) => state.search.term
export const selectSearchResults = (state) => state.search.searchResults
export const { test } = searchSlice.actions
export default searchSlice.reducer

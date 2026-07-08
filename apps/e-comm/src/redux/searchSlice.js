import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../util/apiCall";

const initialState = {
  searchResult: [],
  loading: false,
  error: "",
};

export const getSearchResult = createAsyncThunk(
  "/products/search",
  async (value) => {
    const searchData = await apiClient(
      `/api/products/search?search=${value}`,
    );

    return searchData.data;
  },
);

const searchSlice = createSlice({
  name: "globalSearch",
  initialState,
  reducers: {
    updateSearchResults(state, actions) {
      state.searchResult = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSearchResult.fulfilled, (state, action) => {
        state.loading = false;

        let result = action.payload;
        if (result.length === 0) {
          state.searchResult = [{ name: "No Product Found" }];
        } else {
          state.searchResult = action.payload;
        }
      })
      .addCase(getSearchResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { updateSearchResults } = searchSlice.actions;
export default searchSlice.reducer;

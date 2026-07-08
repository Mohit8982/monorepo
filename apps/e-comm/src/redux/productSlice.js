import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../util/apiCall";

const initialState = {
  products: [],
  loading: false,
  error: null,
  pagination: {},
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (pageNo = 1, limit = 5) => {
    const resp = await apiClient(
      `/api/products?page=${pageNo}&limit=${limit}`,
    );
    return resp;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
        state.pagination = action.payload.pagination;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateProduct } = productSlice.actions;

export default productSlice.reducer;

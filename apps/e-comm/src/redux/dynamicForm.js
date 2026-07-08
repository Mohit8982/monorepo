import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  formFiled: [],
  formData: [],
  isLoading: false,
  error: null,
};

export const getFormDetails = createAsyncThunk("getFormDetails", async () => {
  const data = {
    title: "Add Product",
    submitButton: "Add Product",
    fields: [
      {
        name: "productName",
        label: "Product Name",
        type: "text",
        placeholder: "Enter product name",
      },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: [
          {
            label: "Electronics",
            value: "electronics",
          },
          {
            label: "Clothing",
            value: "clothing",
          },
          {
            label: "Books",
            value: "books",
          },
          {
            label: "Home & Kitchen",
            value: "home-kitchen",
          },
        ],
      },
      {
        name: "warranty",
        label: "Warranty (Months)",
        type: "number",
        placeholder: "Enter warranty period",
        showWhen: {
          field: "category",
          value: "electronics",
        },
      },
      {
        name: "price",
        label: "Price",
        type: "number",
        placeholder: "Enter product price",
      },
      {
        name: "quantity",
        label: "Quantity",
        type: "number",
        placeholder: "Enter available quantity",
      },
      {
        name: "brand",
        label: "Brand",
        type: "text",
        placeholder: "Enter brand name",
      },
      {
        name: "description",
        label: "Description",
        type: "textarea",
        placeholder: "Enter product description",
      },
      {
        name: "status",
        label: "Status",
        type: "select",
        options: [
          {
            label: "Active",
            value: "active",
          },
          {
            label: "Inactive",
            value: "inactive",
          },
        ],
      },
    ],
  };

  return data;
});

const formSlice = createSlice({
  name: "dynamicForm",
  initialState,
  reducers: {
    updateFrom(state, action) {
      state.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFormDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFormDetails.fulfilled, (state, action) => {
        state.formFiled = action.payload;
        state.isLoading = false;
      })
      .addCase(getFormDetails.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { updateFrom } = formSlice.actions;
export default formSlice.reducer;

// const formData = await fetch(
//   "https://acs-api-uat.azurewebsites.net/api/FormControlsData/GetFormControls/FS/EZ/010/CA/C",
//   {
//     method: "GET",
//     cors: true,
//   },
// );

// if (!formData.ok) {
//   return rejectWithValue(formData.message);
// }

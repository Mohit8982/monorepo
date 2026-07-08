import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  authChecked: false,
  token: null,
  user: {},
  loading: false,
  error: null,
};

export const doLogin = createAsyncThunk(
  "/verifyOtp",
  async (params, { rejectWithValue }) => {
    const login = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
      credentials: "include",
    });

    const resp = await login.json();
    if (!login.ok) {
      return rejectWithValue(resp);
    }

    return resp;
  },
);

export const logoutApp = createAsyncThunk(
  "/logout",
  async (_, { rejectWithValue }) => {
    const login = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const resp = await login.json();

    if (!login.ok) {
      return rejectWithValue(resp);
    }

    return resp;
  },
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.isLogin = false;
      state.user = {};
    },
    setLogin(state, action) {
      state.isLogin = true;
      state.user = action.payload;
      state.authChecked = true;
    },
    setAuthChecked(state) {
      state.authChecked = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(doLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(doLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.isLogin = true;
        state.user = action.payload.user;
      })
      .addCase(doLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(logoutApp.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutApp.fulfilled, (state) => {
        state.loading = false;
        state.isLogin = false;
        state.user = {};
      })
      .addCase(logoutApp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, setLogin, setAuthChecked } = loginSlice.actions;
export default loginSlice.reducer;

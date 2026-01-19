import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./type";
import { fetchProfile } from "./authThunk";
import { loginThunk } from "./loginThunk";
const initialState: AuthState = {
  user: null,
  loading: true,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.user = null;
        state.loading = false;
      })
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.user = null;
        state.loading = false;
      });
  },
});

export const { clearUser } = authSlice.actions;
export default authSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, me } from "./api";
export const loginThunk = createAsyncThunk(
  "auth/login",
  async (
    payload: { email: string; passwordHash: string },
    { rejectWithValue },
  ) => {
    try {
      await login(payload);
      const res = await me();
      return res.data.data;
    } catch {
      return rejectWithValue(null);
    }
  },
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../services/http";

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await http.get("/auth/me");
      return res.data.data;
    } catch {
      return rejectWithValue(null);
    }
  },
);

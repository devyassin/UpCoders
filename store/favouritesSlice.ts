import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "@/constants/endpoints";
import axios from "axios";

const URL = `${API_URL}/api`;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "content-type": "application/json",
  },
});

// get all favourites
export const getAllFavourites = createAsyncThunk("favourites/all", async () => {
  try {
    const response = await instance.get("/favourites");
    return response.data;
  } catch (error: any) {
    return new Error(error.message);
  }
});

// Add a new gig
export const addFavourite = createAsyncThunk(
  "favourites/add",
  async (favourite, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/favourites`, favourite);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// Define the initial favourites state
const initialState = {
  data: [],
  statusAddFavourite: "",
  statusGetAllFavourites: "",
  favourite: {
    gig_id: "",
    user_id: "",
  },
  errorAddFavourite: "",
  errorGetAllFavourites: "",
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addFavourite.pending, (state) => {
        state.statusAddFavourite = "loading";
      })
      .addCase(addFavourite.fulfilled, (state, { payload }) => {
        state.statusAddFavourite = "succeeded";
      })
      .addCase(addFavourite.rejected, (state, { payload }: any) => {
        state.statusAddFavourite = "failed";
        state.errorAddFavourite = payload.response.data.message;
      })
      .addCase(getAllFavourites.pending, (state) => {
        state.statusGetAllFavourites = "loading";
      })
      .addCase(getAllFavourites.fulfilled, (state, { payload }) => {
        state.statusGetAllFavourites = "succeeded";
        console.log(payload);
        state.data = payload;
      })
      .addCase(getAllFavourites.rejected, (state, { payload }: any) => {
        state.statusGetAllFavourites = "failed";
        state.errorGetAllFavourites = payload.response.data.message;
      });
  },
});

export default favouriteSlice.reducer;

import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
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

// Add a new favourite
export const addFavourite = createAsyncThunk(
  "favourites/add",
  async (favourite: any, { rejectWithValue }) => {
    try {
      const response = await instance.post(`/favourites`, favourite);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// Add a new favourite
export const deleteFavourite = createAsyncThunk(
  "favourites/delete",
  async (gig_id: string, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`/favourites/${gig_id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);

// Define the initial favourites state
const initialState = {
  data: {
    size: 0,
    favourites: [],
  },
  statusAddFavourite: "",
  statusGetAllFavourites: "",
  statusDeleteFavourites: "",
  favourite: {
    gig_id: "",
    user_id: "",
  },
  errorAddFavourite: "",
  errorGetAllFavourites: "",
  errorDeleteFavourites: "",
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    deleteFavFnc: (state, { payload }) => {
      let gig_id = payload;
      console.log(current(state).data.favourites);

      state.data.favourites = state.data.favourites.filter((favourite: any) => {
        console.log(favourite);

        return favourite.gig_id._id !== gig_id;
      });
    },
  },
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
      })
      .addCase(deleteFavourite.pending, (state) => {
        state.statusDeleteFavourites = "loading";
      })
      .addCase(deleteFavourite.fulfilled, (state, { payload }) => {
        state.statusDeleteFavourites = "succeeded";
        // let gig_id = payload.favourite.gig_id;
      })
      .addCase(deleteFavourite.rejected, (state, { payload }: any) => {
        state.statusDeleteFavourites = "failed";
        state.errorDeleteFavourites = payload.response.data.message;
      });
  },
});

export const { deleteFavFnc } = favouriteSlice.actions;
export default favouriteSlice.reducer;

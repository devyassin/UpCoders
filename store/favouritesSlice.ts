import { createSlice, current } from "@reduxjs/toolkit";

import { StateManagementHelper } from "@/helpers/StateManagementHelper";

const apiService = new StateManagementHelper("favourites");

// get all favourites
export const getAllFavourites = apiService.getAll();

// Add a new favourite
export const addFavourite = apiService.add();

// Add a new favourite
export const deleteFavourite = apiService.delete();

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
      .addCase(getAllFavourites.fulfilled, (state: any, { payload }) => {
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

/* 

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

class ApiService {
  constructor(baseURL) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  getAll = (resource) =>
    createAsyncThunk(`${resource}/all`, async () => {
      try {
        const response = await this.instance.get(`/${resource}`);
        return response.data;
      } catch (error) {
        return new Error(error.message);
      }
    });

  add = (resource) =>
    createAsyncThunk(`${resource}/add`, async (data, { rejectWithValue }) => {
      try {
        const response = await this.instance.post(`/${resource}`, data);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    });

  delete = (resource) =>
    createAsyncThunk(`${resource}/delete`, async (id, { rejectWithValue }) => {
      try {
        const response = await this.instance.delete(`/${resource}/${id}`);
        return response.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    });
}

// Usage
const API_URL = `${API_URL}/api`;
const apiService = new ApiService(API_URL);

// Example usage for favourites
const favouritesService = apiService.getAll("favourites");
const addFavouriteService = apiService.add("favourites");
const deleteFavouriteService = apiService.delete("favourites");

*/

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { API_URL } from "@/constants/endpoints";

const baseURL = `${API_URL}/api`;

export class StateManagementHelper {
  private instance: AxiosInstance;
  private resource: string;

  constructor(resource: string) {
    this.resource = resource;
    this.instance = axios.create({
      baseURL,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  getAll = () =>
    createAsyncThunk(
      `${this.resource}/all`,
      async (): Promise<AxiosResponse> => {
        try {
          const response = await this.instance.get(`/${this.resource}`);
          return response.data;
        } catch (error: any) {
          return Promise.reject(new Error(error.message));
        }
      }
    );

  add = () =>
    createAsyncThunk(
      `${this.resource}/add`,
      async (data: any, { rejectWithValue }) => {
        try {
          const response = await this.instance.post(`/${this.resource}`, data);
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );

  delete = () =>
    createAsyncThunk(
      `${this.resource}/delete`,
      async (id: any, { rejectWithValue }) => {
        try {
          const response = await this.instance.delete(
            `/${this.resource}/${id}`
          );
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error);
        }
      }
    );
}

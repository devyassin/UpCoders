import { API_URL } from "@/constants/endpoints";
import axios from "axios";

const URL = `${API_URL}/api`;

const instance = axios.create({
  baseURL: URL,
  headers: {
    "content-type": "application/json",
  },
});

export const fetchReviews = async (page: number) => {
  try {
    const response = await instance.get(
      `/reviews?page=${page ? page : 1}&limit=3&sort=-createdAt`
    );
    return response.data.reviews;
  } catch (error) {
    throw error;
  }
};

import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function getAllMovies(page = 1) {
  try {
    const response = await axios.get(`${BASE_URL}/movies?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

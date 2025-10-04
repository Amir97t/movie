import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function searchMovies(name, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movies?q=${name}&page=${page}`
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return [];
  }
}

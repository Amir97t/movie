import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function getMovieById(movieId) {
  try {
    const response = await axios.get(
      `${BASE_URL}/movies/${movieId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error while trying to fetch movie data:", error);
    return null;
  }
}

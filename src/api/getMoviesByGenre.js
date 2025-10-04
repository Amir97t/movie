import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;
export default async function getMoviesByGenre(genreName, page = 1) {
  try {
    const res = await axios.get(
      `${BASE_URL}/genres/${genreName}/movies?page=${page}`
    );
    return res.data.data; 
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    return [];
  }
}

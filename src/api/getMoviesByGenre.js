import axios from "axios";

export default async function getMoviesByGenre(genreName, page = 1) {
  try {
    const res = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/genres/${genreName}/movies?page=${page}`
    );
    return res.data.data; 
  } catch (err) {
    console.error("API Error:", err.response?.data || err.message);
    return [];
  }
}

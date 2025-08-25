import axios from "axios";

export default async function getAllMovies(page = 1) {
  try {
    const response = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

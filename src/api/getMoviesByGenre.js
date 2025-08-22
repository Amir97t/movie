import axios from "axios";

export async function fetchMoviesByGenre(genreName, page = 1) {
  try {
    const response = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/genres/${genreName}/movies?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

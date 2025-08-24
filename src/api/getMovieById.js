import axios from "axios";

export async function getMovieById(movieId) {
  try {
    const response = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/movies/${movieId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error while trying to fetch movie data:", error);
    return null;
  }
}

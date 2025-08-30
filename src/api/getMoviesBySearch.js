import axios from "axios";

export default async function searchMovies(name, page = 1) {
  try {
    const response = await axios.get(
      `https://moviesapi.codingfront.dev/api/v1/movies?q=${name}&page=${page}`
    );
    return response.data.data; 
  } catch (error) {
    console.error("Error fetching movie:", error);
    return [];
  }
}
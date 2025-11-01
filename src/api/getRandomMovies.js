import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function getRandomMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/random_movies`);
    return response.data; 
  } catch (error) {
    console.error("Error fetching random movies:", error);
    return [];
  }
}

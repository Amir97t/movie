import axios from "axios";

export default async function getGenres() {
  try {
    const { data } = await axios.get(
      "https://moviesapi.codingfront.dev/api/v1/genres"
    );
    return data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
}

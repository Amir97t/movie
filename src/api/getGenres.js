import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default async function getGenres() {
  try {
    const { data } = await axios.get(`${BASE_URL}/genres`);
    return data;
  } catch (error) {
    console.error("Error fetching genres:", error);
    throw error;
  }
}



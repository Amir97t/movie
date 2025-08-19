import axios from "axios";

// export default async function getCategories(genres) {
//   if (!genres) {
//     return;
//   }
//   const response = await axios.get(
//     `https://https://moviesapi.codingfront.dev/api/v1/genres`
//   );
//   return response.data.genres;
// }

export default async function getGenres() {
  try {
    const { data } = await axios.get(
      "https://moviesapi.codingfront.dev/api/v1/genres"
    );
    return data;
  } catch (error) {
    console.error("Error fetching genres with axios:", error);
    throw error;
  }
}

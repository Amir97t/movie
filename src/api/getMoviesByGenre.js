import axiosClient from "./axiosClient";

export default async function getMoviesByGenre(genreName, page = 1) {
  const res = await axiosClient.get(`/genres/${genreName}/movies?page=${page}`);
  return res.data;
}



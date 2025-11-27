import axiosClient from "./axiosClient";

export default async function searchMovies(name, page = 1) {
  const res = await axiosClient.get(`/movies?q=${name}&page=${page}`);
  return res.data;
}

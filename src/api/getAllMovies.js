import axiosClient from "./axiosClient";

export default function getAllMovies(page = 1) {
  return axiosClient.get(`/movies?page=${page}`);
}

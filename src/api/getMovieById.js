import axiosClient from "./axiosClient";

export default  function getMovieById(movieId) {
  return axiosClient.get(`/movies/${movieId}`);
}

import axiosClient from "./axiosClient";
export default  function getRandomMovies() {
  return axiosClient.get(`/random_movies`);
}

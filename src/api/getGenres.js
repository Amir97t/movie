import axiosClient from "./axiosClient";

export default  function getGenres() {
return axiosClient.get("/genres")
}





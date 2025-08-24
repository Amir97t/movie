import { useLoaderData } from "react-router";
import MovieList from "../components/MovieList";
import getMoviesByGenre from "../api/getMoviesByGenre";

export async function MovieByGenreLoader({ params }) {
  const movies = await getMoviesByGenre(params.genre);
  return { movies };
}

export default function MovieByGenre() {
  const { movies } = useLoaderData([]);

  return <div className="mt-5">{movies && <MovieList movies={movies} />}</div>;
}

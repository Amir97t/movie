import getAllMovies from "../api/getAllMovies";
import { useLoaderData } from "react-router";
import MovieList from "../components/MovieList";

export async function HomeLoader() {
  const movie = await getAllMovies();
  return { movie };
}

export default function Home() {
  const { movie } = useLoaderData();
  return <div>{movie && <MovieList movies={movie.data} />}</div>;
}

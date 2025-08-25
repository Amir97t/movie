import getMovieById from "../api/getMovieById";
import { useLoaderData } from "react-router";
import Movie from "../components/Movie";

export async function MovieLoader({ params }) {
  const movie = await getMovieById(params.id);
  return { movie };
}

export default function MoviePage() {
  const { movie } = useLoaderData();

  return <div>{movie && <Movie movie={movie} />}</div>;
}

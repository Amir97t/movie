import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster}
              genres={movie.genres}
              imdb_rating={movie.imdb_rating}
            />
          );
        })}
    </>
  );
}

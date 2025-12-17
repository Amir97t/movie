import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <>
      {movies &&
        movies.map((movie) => {
          return (
            <MovieCard
              loading="lazy"
              decoding="async"
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

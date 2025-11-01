import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "../components/MovieList";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import getMoviesByGenre from "../api/getMoviesByGenre";

export async function MovieByGenreLoader({ params }) {
  const movies = await getMoviesByGenre(params.genre, 1);
  return { movies };
}

export default function MovieByGenre() {
  const { genre } = useParams();
  const { movies: initialMovies } = useLoaderData();

  const [movies, setMovies] = useState(initialMovies || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [isFirstLoading, setIsFirstLoading] = useState(!initialMovies?.length);

  const fetchMoreMovies = async () => {
    try {
      const newMovies = await getMoviesByGenre(genre, page);
      if (newMovies.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prev) => [...prev, ...newMovies]);
        setPage((prev) => prev + 1);
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    setMovies(initialMovies || []);
    setPage(2);
    setHasMore(true);
    setIsFirstLoading(!initialMovies?.length);
  }, [genre, initialMovies]);

  if (isFirstLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 mt-5">
        {[...Array(8)].map((_, idx) => (
          <MovieCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2></h2>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        loader={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6">
            {[...Array(4)].map((_, idx) => (
              <MovieCardSkeleton key={idx} />
            ))}
          </div>
        }
        endMessage={
          <p className="text-center my-4 text-[#EBEEF5]">
            🎬 No More Item On The List
          </p>
        }
        style={{ overflow: "visible" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6">
          <MovieList movies={movies} />
        </div>
      </InfiniteScroll>
    </div>
  );
}

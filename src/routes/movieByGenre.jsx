import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "../components/MovieList";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import getMoviesByGenre from "../api/getMoviesByGenre";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../components/ScrollToTopButton";

export async function MovieByGenreLoader({ params }) {
  const movies = await getMoviesByGenre(params.genre, 1);
  return { movies };
}

export default function MovieByGenre() {
  const { genre } = useParams();
  const { movies: initialMovies } = useLoaderData();
  const { t } = useTranslation();

  const [movies, setMovies] = useState(initialMovies || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [isFirstLoading, setIsFirstLoading] = useState(
    !initialMovies || initialMovies.length === 0
  );

  const VISIBLE_LIMIT = 48;
  const visibleMovies =
    movies.length > VISIBLE_LIMIT
      ? movies.slice(movies.length - VISIBLE_LIMIT)
      : movies;

  const fetchMoreMovies = async () => {
    try {
      const newMovies = await getMoviesByGenre(genre, page);

      if (!newMovies || newMovies.length === 0) {
        setHasMore(false);
        return;
      }

      setMovies((prev) => [...prev, ...newMovies]);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      setHasMore(false);
    }
  };

  useEffect(() => {
    setMovies(initialMovies || []);
    setPage(2);
    setHasMore(true);
    setIsFirstLoading(!initialMovies || initialMovies.length === 0);
  }, [genre, initialMovies]);

  if (isFirstLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 mt-5">
        {Array.from({ length: 8 }).map((_, idx) => (
          <MovieCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        style={{ overflow: "visible" }}
        endMessage={
          <p className="text-center my-4 text-[#EBEEF5]">{t("home.scroll")}</p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6">
          <MovieList movies={visibleMovies} />

          {hasMore &&
            Array.from({ length: 6 }).map((_, idx) => (
              <MovieCardSkeleton key={`skeleton-${idx}`} />
            ))}
        </div>
      </InfiniteScroll>
      <ScrollToTopButton />
    </div>
  );
}

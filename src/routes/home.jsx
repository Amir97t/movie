import { useLoaderData } from "react-router";
import { useState, useEffect, useRef } from "react";
import getAllMovies from "../api/getAllMovies";
import MovieList from "../components/MovieList";
import Spinner from "../components/Spinner";

export async function HomeLoader() {
  const movies = await getAllMovies(1);
  return { movies };
}

export default function Home() {
  const { movies } = useLoaderData();

  const [allMovies, setAllMovies] = useState(movies.data.slice(0, 8));
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(page < movies.metadata.page_count);

  const loaderRef = useRef(null);

  useEffect(() => {
    if (page === 1) return;
    const fetchMore = async () => {
      const next = await getAllMovies(page);
      setAllMovies((prev) => [...prev, ...next.data]);
      if (page >= next.metadata.page_count) {
        setHasMore(false);
      }
    };
    fetchMore();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, [hasMore]);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Movies</h1>
      <MovieList movies={allMovies} />

      {hasMore && (
        <div ref={loaderRef} className="text-center p-4 text-gray-500">
          <Spinner /> Loading more...
        </div>
      )}
    </div>
  );
}

import { useLoaderData } from "react-router";
import { useState, useEffect, useRef } from "react";
import getAllMovies from "../api/getAllMovies";
import MovieList from "../components/MovieList";
import MovieCardSkeleton from "../components/MovieCardSkeleton";

export async function HomeLoader() {
  const movies = await getAllMovies(1);
  return { movies };
}

export default function Home() {
  const { movies } = useLoaderData();

  const [allMovies, setAllMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(page < movies.metadata.page_count);
  const [loading, setLoading] = useState(true);

  const loaderRef = useRef(null);

 
  useEffect(() => {
    setAllMovies(movies.data.slice(0, 8));
    setLoading(false);
  }, [movies]);


  useEffect(() => {
    if (page === 1) return;
    const fetchMore = async () => {
      setLoading(true);
      const next = await getAllMovies(page);
      setAllMovies((prev) => [...prev, ...next.data]);
      setLoading(false);
      if (page >= next.metadata.page_count) {
        setHasMore(false);
      }
    };
    fetchMore();
  }, [page]);

 
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
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
  }, [hasMore, loading]);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Movies</h1>

     
      {loading && allMovies.length === 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <MovieCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <MovieList movies={allMovies} />
      )}

      {hasMore && (
        <div ref={loaderRef} className="flex justify-center mt-4">
          {loading && allMovies.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
              {Array.from({ length: 4 }).map((_, idx) => (
                <MovieCardSkeleton key={idx} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

import { useState } from "react";
import { useLoaderData } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import getAllMovies from "../api/getAllMovies";
import MovieList from "../components/MovieList";
import MovieCardSkeleton from "../components/MovieCardSkeleton";

export async function HomeLoader() {
  const movies = await getAllMovies(1);
  return { movies };
}

export default function Home() {
  const { movies } = useLoaderData();

  const [allMovies, setAllMovies] = useState(movies.data || []);
  const [page, setPage] = useState(2);
  const [hasMore, setHasMore] = useState(page <= movies.metadata.page_count);

  const fetchMoreMovies = async () => {
    try {
      const next = await getAllMovies(page);
      if (next.data.length === 0) {
        setHasMore(false);
      } else {
        setAllMovies((prev) => [...prev, ...next.data]);
        setPage((prev) => prev + 1);
        if (page >= next.metadata.page_count) {
          setHasMore(false);
        }
      }
    } catch (err) {
      console.error(err);
      setHasMore(false);
    }
  };

  if (!allMovies.length) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5">
        {Array.from({ length: 8 }).map((_, idx) => (
          <MovieCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5  text-[#EBEEF5]">
      <InfiniteScroll
        dataLength={allMovies.length}
        next={fetchMoreMovies}
        hasMore={hasMore}
        loader={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-5 gap-x-12 justify-items-center">
            {Array.from({ length: 4 }).map((_, idx) => (
              <MovieCardSkeleton key={idx} />
            ))}
          </div>
        }
        endMessage={
          <p className="text-center my-4">🎬 No more item on the list</p>
        }
        style={{ overflow: "visible" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-12 justify-items-center">
          <MovieList movies={allMovies} />
        </div>
      </InfiniteScroll>
    </div>
  );
}

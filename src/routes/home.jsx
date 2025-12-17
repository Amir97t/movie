import { useEffect, useState } from "react";
import getAllMovies from "../api/getAllMovies";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import MovieList from "../components/MovieList";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollToTopButton from "../components/ScrollToTopButton";

export async function HomeLoader() {
  const movies = await getAllMovies(1);
  return { movies };
}

export default function Home() {
  const { t } = useTranslation();

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async (pageNumber) => {
    try {
      setLoading(true);
      const res = await getAllMovies(pageNumber);

      setMovies(res.data || []);
      setPageCount(res.metadata.page_count);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const getPagination = (current, total) => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages = new Set();

    pages.add(1);
    pages.add(total);

    if (current > 1) pages.add(current - 1);
    pages.add(current);
    if (current < total) pages.add(current + 1);

    return [...pages].sort((a, b) => a - b);
  };

  return (
    <div className="mt-6 text-[#EBEEF5]">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6"
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6"
            key={`page-${page}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <MovieList movies={movies} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-center items-center gap-2 sm:gap-3 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-[#1c2236] disabled:opacity-40"
        >
          ◀
        </button>

        <div className="hidden sm:flex items-center gap-3">
          {getPagination(page, pageCount).map((p, index, arr) => {
            const prev = arr[index - 1];

            return (
              <span key={p} className="flex items-center gap-3">
                {prev && p - prev > 1 && (
                  <span className="px-2 select-none">...</span>
                )}

                <button
                  onClick={() => setPage(p)}
                  className={`px-4 py-2 rounded-md ${
                    page === p ? "bg-[#7B6EF6] text-white" : "bg-[#1c2236]"
                  }`}
                >
                  {p}
                </button>
              </span>
            );
          })}
        </div>

        <div className="flex sm:hidden items-center gap-2">
          {page > 2 && (
            <button
              onClick={() => setPage(1)}
              className="px-3 py-2 rounded-md bg-[#1c2236]"
            >
              1
            </button>
          )}

          {page > 3 && <span className="px-1 select-none">...</span>}

          {page > 1 && (
            <button
              onClick={() => setPage(page - 1)}
              className="px-3 py-2 rounded-md bg-[#1c2236]"
            >
              {page - 1}
            </button>
          )}

          <span className="px-3 py-2 rounded-md bg-[#7B6EF6] text-white">
            {page}
          </span>

          {page < pageCount && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-3 py-2 rounded-md bg-[#1c2236]"
            >
              {page + 1}
            </button>
          )}

          {page < pageCount - 2 && (
            <span className="px-1 select-none">...</span>
          )}

          {page < pageCount - 1 && (
            <button
              onClick={() => setPage(pageCount)}
              className="px-3 py-2 rounded-md bg-[#1c2236]"
            >
              {pageCount}
            </button>
          )}
        </div>

        <button
          disabled={page === pageCount}
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-2 sm:px-4 sm:py-2 rounded-md bg-[#1c2236] disabled:opacity-40"
        >
          ▶
        </button>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import getRandomMovies from "../api/getRandomMovies";
import MovieList from "./MovieList";
import MovieCardSkeleton from "./MovieCardSkeleton";

export default function RandomMovieCard() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [skeletonCount, setSkeletonCount] = useState(4);

  useEffect(() => {
    const updateSkeletonCount = () => {
      const width = window.innerWidth;
      if (width < 640) setSkeletonCount(1);
      else if (width < 1024) setSkeletonCount(2);
      else setSkeletonCount(4);
    };

    updateSkeletonCount();
    window.addEventListener("resize", updateSkeletonCount);
    return () => window.removeEventListener("resize", updateSkeletonCount);
  }, []);

  const fetchMovies = async () => {
    try {
      setLoading(true);
      const data = await getRandomMovies();
      setMovies(data || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <motion.button
          onClick={fetchMovies}
          disabled={loading}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`mb-6 hover:cursor-pointer px-6 py-2 rounded-lg bg-[#7B6EF6] text-white font-semibold shadow-md transition
          ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-[#6a5de6]"}`}
        >
          <div className="mr-3">
            {loading ? "Loading..." : "🔄 Refresh Movies"}
          </div>
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="skeletons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-13 justify-items-center my-6"
          >
            {Array.from({ length: skeletonCount }).map((_, i) => (
              <MovieCardSkeleton key={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="movies"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-13 justify-items-center my-6"
          >
            <MovieList movies={movies} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

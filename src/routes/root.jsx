// src/routes/root.jsx
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/NavBar";
import GenreList from "../components/GenreList";
import getMovieBySearch from "../api/getMoviesBySearch";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";

const XIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default function Root() {
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const handleSearch = async () => {
    const q = query.trim();
    if (!q) return;
    try {
      setLoadingSearch(true);
      const results = await getMovieBySearch(q);
      if (!results || results.length === 0) {
        setError("We couldn't find that movie. Did you mean something else?");
        setMovies([]);
      } else {
        setError("");
        setMovies(results);
      }
    } catch (err) {
      console.error(err);
      setError("Search failed. Please try again.");
      setMovies([]);
    } finally {
      setLoadingSearch(false);
    }
  };

  const handleReset = () => {
    setQuery("");
    setMovies([]);
    setError("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const isSearching = query.trim().length > 0;

  return (
    <motion.div
      className="w-[1440px] mx-auto text-[#EBEEF5]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-20">
        <Navbar />

        <motion.div
          className="flex flex-col gap-5 w-[588px] mt-[60px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h1
            className="text-[64px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            MailHereko
          </motion.h1>

          <motion.p
            className="text-[16px] font-normal"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            List of movies and TV Shows, I, Pramod Poudel have watched till
            date. Explore what I have watched and also feel free to make a
            suggestion. 😉
          </motion.p>

          <motion.div
            className="relative w-[344px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            <button
              onClick={handleSearch}
              className="absolute hover:cursor-pointer top-1/2 left-3 -translate-y-1/2"
            >
              <img
                src="../src/assets/searchIcon.svg"
                className="w-5 h-5"
                alt="search"
              />
            </button>

            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value.trim() === "") handleReset();
              }}
              onKeyDown={handleKeyDown}
              placeholder="Search Movies or TV Shows"
              className="w-full h-[64px] pl-10 pr-10 rounded-lg bg-[#1c2236] text-white border border-gray-600"
            />

            {query && (
              <button
                onClick={handleReset}
                className="absolute hover:cursor-pointer top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                <XIcon className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GenreList />
        </motion.div>

        {error && <p className="mt-6 ml-2 text-xl">{error}</p>}

        {isSearching ? (
          loadingSearch ? (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <MovieCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            movies.length > 0 && (
              <div className="mt-8 grid mb-5 grid-cols-2 md:grid-cols-4 gap-6">
                {movies.map((m) => (
                  <MovieCard
                    key={m.id}
                    id={m.id}
                    title={m.title}
                    poster={m.poster}
                    imdb_rating={m.imdb_rating}
                  />
                ))}
              </div>
            )
          )
        ) : (
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
}

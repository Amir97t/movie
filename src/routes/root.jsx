import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/NavBar";
import GenreList from "../components/GenreList";
import getMovieBySearch from "../api/getMoviesBySearch";
import MovieCard from "../components/MovieCard";
import MovieCardSkeleton from "../components/MovieCardSkeleton";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

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
        setError(
          <div className={`${i18n.language === "fa" ? "text-right" : ""}`}>
            {t("home.error")}
          </div>
        );
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
      className="w-full max-w-[1440px] mx-auto text-[#EBEEF5]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="lg:mx-20 md:mx-15 mx-3">
        <Navbar />
        <motion.div
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
          className={`flex items-center text-center md:items-start md:text-left flex-col gap-5 lg:w-[588px] mt-[60px]  ${
            i18n.language === "fa"
              ? "ml-auto text-right items-end"
              : "text-left items-start"
          }`}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h1
            className="text-[64px] sm:text-[48px] md:text-[64px] font-semibold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {t("home.title")}
          </motion.h1>

          <motion.p
            className={`text-[16px] font-normal ${
              i18n.language === "fa" ? "text-right" : ""
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
          >
            {t("home.description")}
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
              placeholder={t("home.search")}
              className="w-full h-16 pl-10 pr-10 rounded-lg bg-[#1c2236] text-white border border-[#8E95A9]"
            />

            {query && (
              <button
                onClick={handleReset}
                className="absolute hover:cursor-pointer top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-red-500"
              >
                <XIcon className={`w-5 h-5 ${i18n.language === "fa" ? "right-3" : ""}`} />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6">
              {Array.from({ length: 8 }).map((_, idx) => (
                <MovieCardSkeleton key={idx} />
              ))}
            </div>
          ) : (
            movies.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-12 justify-items-center my-6">
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

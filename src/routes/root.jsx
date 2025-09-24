import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import GenreList from "../components/GenreList";
import getMovieBySearch from "../api/getMoviesBySearch";
import MovieCard from "../components/MovieCard";

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
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (query.trim().length > 0) {
      const results = await getMovieBySearch(query);
      if (results.length === 0) {
        setError("We couldn't find that movie. Did you mean something else?");
        setMovies([]);
      } else {
        setError("");
        setMovies(results);
      }
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

  return (
    <div className="w-[1440px] mx-auto text-[#EBEEF5]">
      <div className="mx-20">
        <Navbar />
        <div className="flex flex-col gap-5 w-[588px] mt-[60px]">
          <h1 className="text-[64px]">MailHereko</h1>
          <p className="text-[16px] font-normal">
            List of movies and TV Shows, I, Pramod Poudel have watched till
            date. Explore what I have watched and also feel free to make a
            suggestion. 😉
          </p>

          <div className="relative w-[344px]">
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
                if (e.target.value.trim() === "") {
                  handleReset();
                }
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
          </div>
        </div>

        <div className="mt-10">
          <GenreList />
        </div>
        {error && <p className="mt-6 ml-2 text-xl">{error}</p>}
        {movies.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 mb-5 gap-6">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                imdb_rating={movie.imdb_rating}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

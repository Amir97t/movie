import { useState } from "react";
import GenreList from "../components/GenreList";
import getMovieBySearch from "../api/getMoviesBySearch";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (query.trim().length > 0) {
      const results = await getMovieBySearch(query);
      setMovies(results);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="text-[#EBEEF5]">
      <div className="flex flex-col gap-5 w-[588px] mt-[60px]">
        <h1 className="text-[64px]">MailHereko</h1>
        <p className="text-[16px] font-normal">
          List of movies and TV Shows, I, Pramod Poudel have watched till date.
          Explore what I have watched and also feel free to make a suggestion.
          😉
        </p>
        <div className="relative">
          <button onClick={handleSearch} className="absolute top-5 left-3">
            <img
              src="../src/assets/searchIcon.svg"
              className="w-5 h-5"
              alt="search"
            />
          </button>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Movies or TV Shows"
            className="w-[344px] h-[64px] pl-10 rounded-lg bg-[#1c2236] text-white border border-gray-600"
          />
        </div>
      </div>
      {movies.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
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
        <GenreList />
      )}
    </div>
  );
}

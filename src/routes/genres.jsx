import { useEffect, useState } from "react";
import getGenres from "../api/getGenres";
import { Outlet } from "react-router";
import { NavLink } from "react-router";

export default function Genres() {
  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGenres().then((genres) => {
      setLoading(false);
      setGenres(genres);
    });
  }, []);

  return (
    <>
      {!loading && genres && (
        <ul className="flex flex-wrap gap-4 max-h-20 mt-5">
          {genres.map((genre, index) => (
            <li
              key={index}
              className="hover:bg-[#7B6EF6] rounded-xs border hover:cursor-pointer "
            >
              <NavLink to={genre.name}>
                {({ isActive }) => {
                  return (
                    <span className={isActive ? "bg-amber-500" : ""}>
                      {genre.name}
                    </span>
                  );
                }}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {loading && <p>Loading ...</p>}
      <Outlet />
    </>
  );
}

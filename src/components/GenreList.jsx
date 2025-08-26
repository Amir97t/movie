import { useEffect, useState } from "react";
import getGenres from "../api/getGenres";
import { NavLink } from "react-router-dom";

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
        <ul className="flex flex-wrap gap-4 rounded-[12px] mt-5  bg-[#00000033]">
          {genres.map((genre, index) => (
            <li
              key={index}
              className="hover:bg-[#7B6EF6] w-[85px]  h-10 text-center items-center
               hover:text-[#EBE9FE] text-[#8E95A9]  border-0 
               hover:cursor-pointer rounded font-[Poppins] text-[16px] "
            >
              <NavLink to={`/genres/${genre.name}`}>
                {({ isActive }) => {
                  return (
                    <div
                      className={
                        isActive
                          ? "bg-[#7B6EF6] h-10 rounded text-[#EBE9FE]"
                          : ""
                      }
                    >
                      {genre.name}
                    </div>
                  );
                }}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {loading && <p>Loading ...</p>}
    </>
  );
}

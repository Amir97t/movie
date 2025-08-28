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
        <ul className="flex flex-wrap gap-x-2.5 h-24  text-[16px] mt-6 font-[Poppins] bg-[#00000033] p-1 rounded-[12px] ">
          <li className="mt-1" >
            <NavLink
              to={"/all"}
              className={({ isActive }) =>
                `px-6 py-2 rounded-[8px]   transition ${
                  isActive
                    ? "bg-[#7B6EF6] text-[#EBE9FE]"
                    : "text-[#8E95A9] hover:bg-[#7B6EF6] hover:text-[#EBE9FE]"
                }`
              }
            >
              All
            </NavLink>
           </li>
          {genres.map((genre, index) => (
            <li key={index}>
              <NavLink
                to={`/genres/${genre.name}`}
                className={({ isActive }) =>
                  `px-6 py-2 rounded-[8px]  transition ${
                    isActive
                      ? "bg-[#7B6EF6] text-[#EBE9FE]"
                      : "text-[#8E95A9] hover:bg-[#7B6EF6] hover:text-[#EBE9FE]"
                  }`
                }
              >
                {genre.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      {loading && <p>Loading ...</p>}
    </>
  );
}

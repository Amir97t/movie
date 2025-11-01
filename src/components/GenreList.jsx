import { useEffect, useState } from "react";
import getGenres from "../api/getGenres";
import { NavLink, useNavigate } from "react-router-dom";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getGenres().then((genres) => {
      setGenres(genres);
      setLoading(false);
    });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    navigate(value === "all" ? "/all" : `/genres/${value}`);
  };

  if (loading) return <p className="text-white">Loading ...</p>;

  return (
    <>
      <div className="block lg:hidden mt-5 ">
        <select
          value={selected}
          onChange={handleChange}
          className="w-full bg-[#00000033]text-[#EBE9FE] hover:bg-[#7B6EF6]  hover:cursor-pointer p-3 rounded-lg border border-[#8E95A9]"
        >
          <option value="all">All</option>
          {genres.map((genre, index) => (
            <option key={index} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <ul className="hidden  lg:flex lg:flex-wrap gap-2.5 text-[16px] mt-6 font-[Poppins] bg-[#00000033] p-2 rounded-[12px]">
        <li>
          <NavLink
            to={"/all"}
            className={({ isActive }) =>
              `block text-center px-6 py-2 rounded-[8px] transition ${
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
                `block text-center px-6 py-2 rounded-[8px] transition ${
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
    </>
  );
}

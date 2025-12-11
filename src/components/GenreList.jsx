import { useEffect, useState } from "react";
import getGenres from "../api/getGenres";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { genreTranslate } from "../utiles/genreTranslate";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("all");
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const isFA = i18n.language === "fa";
  const fontClass = isFA ? "font-fa" : "font-en";

  useEffect(() => {
    setLoading(true);
    getGenres().then((genres) => {
      setGenres(genres);
      setLoading(false);
    });
  }, []);

  const getGenreName = (name) => {
    if (genreTranslate[name]) return genreTranslate[name][i18n.language];
    return name;
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSelected(value);
    navigate(value === "all" ? "/all" : `/genres/${value}`);
  };

  if (loading) return <p className="text-white">Loading ...</p>;

  return (
    <>
      <div className="block lg:hidden mt-5 hover:text-[#7B6EF6]">
        <select
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
          value={selected}
          onChange={handleChange}
          className={`w-full ${fontClass} text-[#EBE9FE] bg-gray-900 p-3 rounded-lg border border-[#8E95A9]`}
        >
          <option value="all">{i18n.language === "fa" ? "همه" : "All"}</option>

          {genres.map((genre, index) => (
            <option key={index} value={genre.name}>
              {getGenreName(genre.name)}
            </option>
          ))}
        </select>
      </div>
      <ul
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
        className={`hidden lg:flex lg:flex-wrap gap-2.5 text-[16px] mt-6 bg-[#00000033] p-2 rounded-xl ${fontClass}`}
      >
        <li>
          <NavLink
            to={"/all"}
            className={({ isActive }) =>
              `block ${fontClass} text-center  px-6 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#7B6EF6] text-[#EBE9FE]"
                  : "text-[#8E95A9] hover:bg-[#7B6EF6] hover:text-[#EBE9FE]"
              }`
            }
          >
            {i18n.language === "fa" ? "همه" : "All"}
          </NavLink>
        </li>

        {genres.map((genre, index) => (
          <li key={index}>
            <NavLink
              to={`/genres/${genre.name}`}
              className={({ isActive }) =>
                `block text-center ${fontClass} px-6 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-[#7B6EF6] text-[#EBE9FE]"
                    : "text-[#8E95A9] hover:bg-[#7B6EF6] hover:text-[#EBE9FE]"
                }`
              }
            >
              {getGenreName(genre.name)}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

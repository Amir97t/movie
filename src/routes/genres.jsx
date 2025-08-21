import { useEffect, useState } from "react";
import getGenres from "../api/getGenres";
// import { Outlet } from "react-router";
import { Link } from "react-router";

export default function Genres() {
  const [genres, setGenres] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGenres().then((genre) => setGenres(genre));
    setLoading(false);
  }, []);

  return (
    <>
      {!loading && genres && (
        <ul className="flex flex-wrap gap-4 max-h-20 mt-5">
          {genres.map((genre, index) => (
            <Link key={index} to={"/ali"}>
              <li className="hover:bg-[#7B6EF6] rounded-xs border hover:cursor-pointer ">
                {genre.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
      {loading && <p>Loading...</p>}
    </>
  );
}

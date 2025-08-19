import { useEffect, useState } from "react";
import getGenres from "../api/getGenres";

export default function Genres() {
  const [genres, setGenres] = useState(null);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getGenres().then((gen) => setGenres(gen));
  }, []);

  return (
    <>
      <h2>Genres</h2>
      {genres && (
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

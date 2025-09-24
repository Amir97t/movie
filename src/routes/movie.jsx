import getMovieById from "../api/getMovieById";
import { useLoaderData } from "react-router";
import Movie from "../components/Movie";
import { motion } from "framer-motion";

export async function MovieLoader({ params }) {
  const movie = await getMovieById(params.id);
  return { movie };
}

export default function MoviePage() {
  const { movie } = useLoaderData();

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {movie && <Movie movie={movie} />}
    </motion.div>
  );
}

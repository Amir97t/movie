import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

export default function Movie({ movie }) {
  const {
    title,
    type,
    runtime,
    released,
    imdb_rating,
    genres,
    poster,
    images,
    plot,
    director,
  } = movie;

  return (
     
    <div className="max-w-[1200px] mx-auto text-[#EBEEF5] px-4 sm:px-6 md:px-8 overflow-hidden">
        <NavBar />
      
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative">
          <img
            className="w-full h-[240px] sm:h-[360px] md:h-[460px] rounded-[24px] sm:rounded-[32px] md:rounded-[42px] shadow-lg object-cover"
            src={images}
            alt="movie-cover"
          />

          <div className="absolute w-[85%] sm:w-[420px] md:w-[520px] h-auto -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 sm:left-20 sm:translate-x-0 bg-[#20283ECC] backdrop-blur-md px-4 sm:px-6 py-4 rounded-xl border border-blue-500/40">
            <p className="text-xs sm:text-sm mt-2 sm:mt-4">
              MaileHereko / {type}
            </p>
            <h2 className="text-lg sm:text-xl font-semibold mt-1">{title}</h2>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-8 items-start md:max-w-[90%] lg:max-w-full mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="flex justify-center md:justify-end">
          <motion.img
            src={poster}
            className="shadow-lg lg:mr-6 rounded-3xl w-[70%] sm:w-[55%] md:w-[380px] lg:w-[460px] max-w-xs sm:max-w-sm md:max-w-md object-cover"
            alt="Poster of current movie"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        <motion.div
          className="w-full md:w-[420px] flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="leading-relaxed lg:ml-6  text-gray-400 md:max-w-[90%] text-base sm:text-lg md:text-xl">
            {plot}
          </p>

          <div className="mt-6 space-y-4 text-sm sm:text-base lg:ml-6 ">
            <div className="flex justify-center  md:justify-start mt-5 items-center gap-2">
              <img
                src="../src/assets/star.svg"
                alt="imdb_rating"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-[#FFAD49] font-medium">{imdb_rating}</span>
            </div>

            <div className="flex flex-col mt-5 gap-4">
              <InfoItem label="Type" value={type} />
              <InfoItem label="Release Date" value={released} />
              <InfoItem label="Runtime" value={runtime} />
              <InfoItem label="Director" value={director} />
              <InfoItem
                label="Genres"
                value={genres && genres.length > 0 ? genres.join(", ") : "N/A"}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <p className="flex flex-col gap-1">
      <span className="text-gray-400">{label}</span>
      <span className="text-white text-lg sm:text-xl">{value}</span>
    </p>
  );
}

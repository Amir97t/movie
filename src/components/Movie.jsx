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
    <div className="w-[1200px] mx-auto text-[#EBEEF5]">
      <div>
        <NavBar />
        <div className="mt-10 w-[1200px] mx-auto ">
          <div className="relative">
            <img
              className="w-full h-[480px] rounded-[42px] shadow-lg"
              src={images}
              alt="movie-cover"
            />

            <div className="absolute w-[560px] h-[120px] -bottom-10 left-20 max-w-md bg-[#20283ECC] backdrop-blur-md px-6 py-4 rounded-xl border border-blue-500/40">
              <p className="text-sm ml-4 mt-4">MaileHereko / {type}</p>
              <h2 className="text-2xl font-semibold mt-1 ml-4">{title}</h2>
            </div>
          </div>
          <div className="mt-15 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex w-[480px] justify-center">
              <img
                src={poster}
                className="shadow-lg rounded-3xl w-full max-w-sm object-cover"
                alt="Poster of current movie"
              />
            </div>

            <div className=" w-[480px]">
              <p className="text-left leading-relaxed text-gray-400 text-xl">
                {plot}
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex mt-5 items-center gap-2">
                  <img
                    src="../src/assets/star.svg"
                    alt="imdb_rating"
                    className="w-5 h-5"
                  />
                  <span className="text-[#FFAD49]  font-medium">
                    {imdb_rating}
                  </span>
                </div>
                <div className="flex flex-col mt-5 gap-3">
                  <p className="flex flex-col">
                    <span className="text-gray-400">Type</span>
                    <span className="text-white text-xl">{type}</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-gray-400">Release Date</span>
                    <span className="text-white text-xl">{released}</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-gray-400">Runtime</span>
                    <span className="text-white text-xl">{runtime}</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-gray-400">Director</span>
                    <span className="text-white text-xl">{director}</span>
                  </p>

                  <p className="flex flex-col">
                    <span className="text-gray-400">Genres:</span>
                    <span className="text-white text-xl">
                      {genres && genres.length > 0 ? genres.join(", ") : "N/A"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

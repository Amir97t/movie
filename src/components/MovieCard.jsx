import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function MovieCard({ id, title, poster, imdb_rating }) {
  return (
    <div className="relative w-[282px]  h-[480px]">
      <div
        className="absolute top-3  left-3 w-14 h-10 rounded 
      bg-[#000000A6] text-[#FFAD49] flex items-center
      justify-center gap-1"
      >
        <img
          className="h-4 w-4"
          src="../public/icons/star.svg"
          alt="rating-star"
        />
        <span className="text-sm  font-semibold">{imdb_rating}</span>
      </div>
      <Link to={`/movies/${id}`}>
        <Card
          className=" bg-[#20283ECC] border-0"
          renderImage={() => (
            <img
              className="h-[380px] w-[266px] rounded object-cover self-center mt-2"
              src={poster}
              alt={title}
            />
          )}
        >
          <h5 className="text-left mb-1  h-12 text-[16px] text-sm font-[Poppins] font-semibold text-[#EBEEF5]">
            {title}
          </h5>
        </Card>
      </Link>
    </div>
  );
}

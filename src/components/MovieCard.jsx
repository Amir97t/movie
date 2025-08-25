import { Card } from "flowbite-react";
import { Link } from "react-router";

export default function MovieCard({ id, title, poster }) {
  return (
    <Link to={`/movies/${id}`}>
      <Card
        className="w-[282px] h-[480px]"
        renderImage={() => <img className="h-[350px]" src={poster} />}
      >
        <h5 className="text-xl font-bold text-black ">{title}</h5>
      </Card>
    </Link>
  );
}

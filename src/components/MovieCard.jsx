import { Card } from "flowbite-react";

export default function MovieCard({ id, title, poster, genres }) {
  return (
    <Card
      className="w-[282px] h-[480px]"
      renderImage={() => <img src={poster} />}
    >
      <h5 className="text-2xl font-bold tracking-tight text-black ">{title}</h5>
    </Card>
  );
}

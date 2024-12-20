import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";

import type { Movie } from "@/lib/types/schema";

export default function MovieCard(movie: Movie): JSX.Element {
  return (
    <div className="w-28 text-white hover:scale-105 duration-300">
    <Card
      style={
        {
          "--bg-image": `url('https://image.tmdb.org/t/p/original${movie.poster_path}')`,
        } as React.CSSProperties
      }
      className={`grid grid-rows-5 justify-end bg-[image:var(--bg-image)] bg-cover bg-center h-36 overflow-hidden`}
    >
      <CardContent className="bg-black/50 row-start-5 flex justify-between w-28 backdrop-blur-sm">
        <CardDescription >{movie.release_date}</CardDescription>
        <CardDescription className="flex gap-1 justify-center items-center bg-foreground rounded-full p-1"><FaStar />{movie.vote_average.toFixed(1)}</CardDescription>
      </CardContent>
    </Card>
    <CardTitle className="text-xs">{movie.original_title}</CardTitle>
    </div>
  );
}

"use client";
import { useMovies } from "@/lib/hooks/query/use-movies-list";
import MovieCard from "./movie-card";

export default function ListMoviesCard(): JSX.Element {
  const { data, error, isPending } = useMovies("?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");

  console.log(data?.results);

  return (
    <div className="grid grid-cols-5 gap-4">
      {isPending && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <>
          {data.results.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </>
      )}
    </div>
  );
}

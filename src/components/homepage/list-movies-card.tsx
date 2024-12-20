"use client";
import { useMovies } from "@/lib/hooks/query/use-movies-list";
import MovieCard from "./movie-card";

export default function ListMoviesCard(): JSX.Element {
  const { data, error, isPending } = useMovies("?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc");

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
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

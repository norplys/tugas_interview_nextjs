'use client'
import { useMovies } from "@/lib/hooks/query/use-movies-list";

export default function ListMoviesCard(): JSX.Element {
  const { data, error, isPending, refetch } = useMovies('all');

  console.log(data);

  return (
    <div className="bg-white w-full min-h-screen">
      {isPending && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {data && (
        <ul >
          {data.Search.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

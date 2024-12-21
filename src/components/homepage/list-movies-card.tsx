"use client";
import { useMovies } from "@/lib/hooks/query/use-movies-list";
import MovieCard from "./movie-card";
import PaginationButton from "./pagination";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ListMoviesCard(): JSX.Element {
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page");

  useEffect(() => {
    if (currentPage) {
      setPage(Number(currentPage));
    }
  }, [currentPage]);

  const [page, setPage] = useState(1);
  const { data, error, isPending } = useMovies(
    `?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`
  );

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 w-full">
        {data && (
          <>
            {data.results.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </>
        )}
      </div>
      <PaginationButton page={page} totalPages={data?.total_pages} />
    </>
  );
}

import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetcher, type ApplicationError } from "@/lib/fetcher";
import type { APIResponse } from "@/lib/types/api";

type Movie = {
    Poster: string;
    Title: string;
    Type: string;
    Year: string;
    imdbID: string;
}

type MovieResponse = APIResponse<Movie[]>;

export function useMovies(search: string): UseQueryResult<MovieResponse, ApplicationError> {
  const result = useQuery<MovieResponse, ApplicationError>({
    queryKey: ["movies"],
    queryFn: (): Promise<MovieResponse> => fetcher(`&s=${search}`),
  });

  return result;
}

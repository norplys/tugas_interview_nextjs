import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetcher, type ApplicationError } from "@/lib/fetcher";
import type { APIResponse } from "@/lib/types/api";
import type { Movie } from "@/lib/types/schema";

type MovieResponse = APIResponse<Movie[]>;

export function useMovies(query: string): UseQueryResult<MovieResponse, ApplicationError> {
  const result = useQuery<MovieResponse, ApplicationError>({
    queryKey: ["movies"],
    queryFn: (): Promise<MovieResponse> => fetcher(`${query}`),
  });

  return result;
}

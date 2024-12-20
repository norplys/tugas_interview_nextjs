import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { fetcher, type ApplicationError } from "@/lib/fetcher";
import type { APIResponse } from "@/lib/types/api";

type MovieResponse = APIResponse<string[]>;

export function useMovies(): UseQueryResult<MovieResponse, ApplicationError> {
  const result = useQuery<MovieResponse, ApplicationError>({
    queryKey: ["movies"],
    queryFn: (): Promise<MovieResponse> => fetcher("/"),
  });

  return result;
}

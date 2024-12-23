export type APIResponse<T = unknown> = {
  results: T;
  page: number;
  total_pages: number;
  total_results: number;
};

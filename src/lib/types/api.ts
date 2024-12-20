export type APIResponse<T = unknown> = {
  Search: T;
  Response: string;
  totalResults: string;
};

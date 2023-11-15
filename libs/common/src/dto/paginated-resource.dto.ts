export type PaginatedResource<T> = {
  _meta?: {
    totalItems: number;
    page: number;
    limit: number;
  };
  items: T[];
};

export interface Paginated<T> {
  data: Array<T>;
  total: number;
  page: number;
  size: number;
}

export const paginate = <T>(data: Array<T>, total: number, page: number, size: number) => {
  return { data, total, page, size };
};

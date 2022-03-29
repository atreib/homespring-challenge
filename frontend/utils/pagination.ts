export interface Paginated<T> {
  data: Array<T>;
  total: number;
  page: number;
  size: number;
}

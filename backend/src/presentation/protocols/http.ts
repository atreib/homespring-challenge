export interface IHttpRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query?: any;
}

export interface IHttpResponse {
  status: number;
  body: unknown;
}

export interface IHttpService {
  handle(request?: IHttpRequest): Promise<IHttpResponse>;
}

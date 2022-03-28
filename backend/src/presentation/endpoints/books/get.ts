import { IHttpResponse, IHttpService } from '../../protocols/http';

export class GetBooksEndpoint implements IHttpService {
  async handle(): Promise<IHttpResponse> {
    throw new Error();
  }
}

import { IGetBooksService } from '../../../domain/use-cases/books/get';
import { IHttpResponse, IHttpService } from '../../protocols/http';

export class GetBooksEndpoint implements IHttpService {
  private readonly getBooksService: IGetBooksService;

  constructor(_getBooksService: IGetBooksService) {
    this.getBooksService = _getBooksService;
  }

  async handle(): Promise<IHttpResponse> {
    await this.getBooksService.handle();
    return {} as IHttpResponse;
  }
}

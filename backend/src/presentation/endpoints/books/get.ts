import { IGetBooksService } from '../../../domain/use-cases/books/get';
import { InternalServerError } from '../../errors';
import { IHttpResponse, IHttpService } from '../../protocols/http';

export class GetBooksEndpoint implements IHttpService {
  private readonly getBooksService: IGetBooksService;

  constructor(_getBooksService: IGetBooksService) {
    this.getBooksService = _getBooksService;
  }

  async handle(): Promise<IHttpResponse> {
    try {
      const books = await this.getBooksService.handle();
      return { status: 200, body: books };
    } catch (err) {
      return { status: 500, body: new InternalServerError() };
    }
  }
}

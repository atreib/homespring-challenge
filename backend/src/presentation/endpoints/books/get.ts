import { IGetBooksService } from '../../../domain/use-cases/books/get';
import { InternalServerError } from '../../errors';
import { IHttpRequest, IHttpResponse, IHttpService } from '../../protocols/http';

export class GetBooksEndpoint implements IHttpService {
  private readonly getBooksService: IGetBooksService;

  constructor(_getBooksService: IGetBooksService) {
    this.getBooksService = _getBooksService;
  }

  async handle(request: IHttpRequest): Promise<IHttpResponse> {
    try {
      const { search } = request.query ?? { search: undefined };
      const books = await this.getBooksService.handle(search);
      return { status: 200, body: books };
    } catch (err) {
      return { status: 500, body: new InternalServerError() };
    }
  }
}

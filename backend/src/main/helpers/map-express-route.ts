import { Request, Response } from 'express';
import { IHttpService } from '../../presentation/protocols/http';

export const adaptRoute = (endpoint: IHttpService) => {
  return async (req: Request, res: Response) => {
    const { status, body } = await endpoint.handle();
    return res.status(status).send(body);
  };
};

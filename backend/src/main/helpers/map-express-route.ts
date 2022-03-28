import { Request, Response } from 'express';
import { IHttpService } from '../../presentation/protocols/http';

export const adaptRoute = (endpoint: IHttpService) => {
  return async (req: Request, res: Response) => {
    const { query } = req;
    const { status, body } = await endpoint.handle({ query });
    return res.status(status).send(body);
  };
};

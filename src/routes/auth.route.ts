import { Express, Request, Response, NextFunction } from 'express';
import { get } from 'http';

function routes(app: Express) {
  app.post('/login', (req: Request, res: Response) => {
    res.send('Login route');
  });
}

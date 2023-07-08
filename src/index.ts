import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { hey } from './helper';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express & TypeScript Server - ' + hey);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
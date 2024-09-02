import { Request, Response } from 'express';

interface HelloResponse {
  hello: string;
}

type HelloBuilder = (name: string) => HelloResponse;

const helloBuilder: HelloBuilder = name => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  console.log('rootHandler')
  return res.send('API is working 🤓');
};

export const helloHandler = (req: Request, res: Response) => {
    const { params } = req;
    const { name = 'World' } = params;
    const response = helloBuilder(name);
    console.log('helloHandler')

    return res.json(response);
};
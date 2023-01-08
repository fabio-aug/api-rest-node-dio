import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 44390;

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: 'bar' });
});

app.listen(port, () => console.log(`Aplicação rodando na porta ${port}!`));
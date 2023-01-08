import { Router, Request, Response, NextFunction } from 'express';
import StatusCode from '../utils/StatusCode';

// CRUD de Users
const usersRoute = Router();

usersRoute.post('/users/add', (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;
    res.status(StatusCode.OK).send(body);
});

usersRoute.get('/users/getAll', (req: Request, res: Response, next: NextFunction) => {
    const usersList = [{ userName: 'Fábio' }];
    res.status(StatusCode.OK).send(usersList);
});

usersRoute.get('/users/getById', (req: Request<null, null, null, { id: string }>, res: Response, next: NextFunction) => {
    const id = req.query.id;
    res.status(StatusCode.OK).send({ id });
});

usersRoute.put('/users/update', (req: Request<null, null, any, { id: string }>, res: Response, next: NextFunction) => {
    const id = req.query.id;
    const userModified = req.body;
    userModified.id = id;
    res.status(StatusCode.OK).send(userModified);
});

usersRoute.delete('/users/delete', (req: Request<null, null, null, { id: string }>, res: Response, next: NextFunction) => {
    const id = req.query.id;
    res.status(StatusCode.OK).send();
});

export default usersRoute;
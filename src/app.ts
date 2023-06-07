import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Application route
app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/', routes)

// app.get('/',  async(req: Request, res: Response, next:NextFunction) => {
//   //  Promise.reject(new Error('Unhaled Promise Rejection'))
//   // throw new ApiError(400,'Ore baba re error')
//   throw new Error('Ore baba re error')
//   // res.send('Working Successfully!')
//   // next('Ore baba Error')
// })

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully');
});

//global error handler
app.use(globalErrorHandler);

export default app;

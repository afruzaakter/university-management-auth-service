import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
// import { generateFacultyId, generateStudentId } from './app/modules/user/user.utils';
const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application route
app.use('/api/v1/', routes);

//handle not found
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
});

// app.get('/',  async(req: Request, res: Response, next:NextFunction) => {
//   //  Promise.reject(new Error('Unhaled Promise Rejection'))
//   // throw new ApiError(400,'Ore baba re error')
//   throw new Error('Ore baba re error')
//   // res.send('Working Successfully!')
//   // next('Ore baba Error')
// })

// app.get('/', async (req: Request, res: Response) => {
//   res.send('Working Successfully');
// });

//global error handler

// GenerateStudentId check process

// const academicSemester = {
//   code: '01',
//   year: '2025'
// }
// const testId = async()=>{
//   const testId =await generateStudentId(academicSemester);
//   console.log(testId)
// };
// testId()

// GenerateFacultyId check process
// const testId = async()=>{
//   const testId =await generateFacultyId();
//   console.log(testId)
// };
// testId()

app.use(globalErrorHandler);
export default app;

import { Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...userData } = req.body;
  const result = await UserService.createStudent(student, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student created successfully!',
    data: result,
  });
});
//create Faculty
const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const { faculty, ...userData } = req.body;
  const result = await UserService.createFaculty(faculty, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Faculty created successfully!',
    data: result,
  });
});

//create Admin
const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const { admin, ...userData } = req.body;
  const result = await UserService.createAdmin(admin, userData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Admin Created Successfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};

import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { IStudent } from './student.interface';
import sendResponse from '../../../shared/sendResponse';
import pick from '../../../shared/pick';
import { Request, Response } from 'express';
import { paginationFields } from '../../../constants/pagination';
import { StudentService } from './student.service';
import { studentFilterableFields } from './student.constant';

//all get data Department
const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, studentFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await StudentService.getAllStudent(filters, paginationOptions);
  sendResponse<IStudent[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});
//all single get data Department
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StudentService.getSingleStudent(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student  fetched successfully!',
    data: result,
  });
});
//all update  department
const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedData = req.body;
  const result = await StudentService.updateStudent(id, updatedData);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student Updated successfully!',
    data: result,
  });
});
//all delete  department
const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StudentService.deleteStudentById(id);

  sendResponse<IStudent>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student deleted successfully!',
    data: result,
  });
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};

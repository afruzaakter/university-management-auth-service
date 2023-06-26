import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);
//Delete method
router.delete('/:id', AcademicSemesterController.deleteSemester);
//show spacific id route
router.get('/:id', AcademicSemesterController.getSingleSemester);
//update method
router.patch(
  '/:id',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterZodSchema),
  AcademicSemesterController.updateSemester
);
//all get method
router.get('/', AcademicSemesterController.getAllSemesters);

export const AcademicSemesterRoutes = router;
